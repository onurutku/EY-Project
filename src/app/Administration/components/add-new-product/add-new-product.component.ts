import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  Observable, takeUntil } from 'rxjs';
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
  file!: File;
  openModal!: boolean;
  croppedImage!: string | null;
  imageChangedEvent!: any | null;

  @ViewChild('inputFile') myInputVariable!: ElementRef;
  constructor(
    private fb: FormBuilder,
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
      lat:['',Validators.required],
      lng:['',Validators.required],
      image: [''],
      file: [''],
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
        lat:editProduct.lat,
        lng:editProduct.lng,
        image: editProduct.image,
        file: editProduct.file,
      });
    });
  }
  onSubmit() {
    const newProduct = {
      title: this.newProduct.value.title,
      description: this.newProduct.value.description,
      price: this.newProduct.value.price,
      quantity: this.newProduct.value.quantity,
      lat:this.newProduct.value.lat.toString(),
      lng:this.newProduct.value.lng.toString(),
      image: this.newProduct.value.image,
      file: this.newProduct.value.file,
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
  //close modal without import a image
  closeModal(event: any) {
    this.openModal = false;
    this.myInputVariable.nativeElement.value = '';
  }
  //close modal and recieve an cropped image
  recieveCroppedImage(event: any) {
    this.openModal = false;
    this.croppedImage = event;
    this.newProduct.patchValue({
      image: this.croppedImage,
    });
    // need to run CD since file load runs outside of zone
  }
  onFileChange(event: any) {
    this.openModal = true;
    this.imageChangedEvent = event;

    //TODO will delete after explanation to Ervin
    // const reader = new FileReader();
    // if (event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.newProduct.patchValue({
    //       image: reader.result,
    //     });
    //     // need to run CD since file load runs outside of zone
    //     this.cd.markForCheck();
    //   };
    // }
  }
  fileChange(event: any) {
    const reader = new FileReader();
    let fileList: FileList = event.target.files;
    const file = fileList[0];
    if (fileList.length > 0) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newProduct.patchValue({
          file: reader.result,
        });
      };
    }
  }
}
