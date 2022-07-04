import { HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  newProduct!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newProduct = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      image: ['', Validators.required],
      picture: [''],
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
    this.productService.post('products', newProduct).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success...',
        text: 'Product Successfully Added',
      });
      this.router.navigate(['/admin/products']);
    });
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
