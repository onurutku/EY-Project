import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { Product } from 'src/app/shared/models/product.model';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent extends BaseComponent implements OnInit {
  editProduct$!: Observable<Product>;
  newProduct!: FormGroup;
  editMode = false;
  editId!: string;
  validationMessage = environment.validationMessage;
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.newProduct = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      image: [''],
    });
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Params) => {
        if (data['id']) {
          this.editId = data['id'];
          this.editMode = true;
          this.getEditProduct(data['id']);
        }
      });
  }
  getEditProduct(id: string) {
    this.productService.get(`products/${id}`).subscribe((editProduct: any) => {
      this.newProduct.patchValue({
        title: editProduct.title,
        description: editProduct.description,
        price: editProduct.price,
        quantity: editProduct.quantity,
        image: editProduct.image,
      });
    });
  }
  onSubmit() {
    const newProduct = {
      title: this.newProduct.value.title,
      description: this.newProduct.value.description,
      price: this.newProduct.value.price,
      quantity: this.newProduct.value.quantity,
      image: this.newProduct.value.image,
    };
    if (!this.editMode) {
      this.productService
        .post('products', newProduct)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Product Successfully Added',
          });
          this.router.navigate(['/admin/products']);
        });
    } else {
      //TODO patch operation
      this.productService
        .patch(`products/${this.editId}`, newProduct)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Product Successfully Edited',
          });
          this.router.navigate(['/admin/products']);
        });
    }
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newProduct.patchValue({
          image: reader.result,
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
