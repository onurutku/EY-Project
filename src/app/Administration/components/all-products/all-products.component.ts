import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  listView = true;
  searchValue!: string | number;
  product!: Product | null;
  constructor(private productService: ProductService) {}

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
  editProduct(product: Product) {}
  deleteProduct(product: Product) {}
}
