import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { Product } from 'src/app/shared/models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent extends BaseComponent implements OnInit {
  products$!: Observable<Product[]>;
  listView = true;
  searchValue!: string | number;
  product!: Product | null;
  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.products$ = this.productService.get('products');
  }
  swapView() {
    this.listView ? (this.listView = !this.listView) : (this.listView = true);
  }
  sendProductToModal(product: Product) {
    this.product = product;
  }
  closeModal($event: any) {
    this.product = null;
  }
  deleteProduct(product: Product) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService
          .delete(`products/${product.id}`)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(() => {
            this.products$ = this.productService.get('products');
          });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
