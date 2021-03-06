import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  listView = true;
  searchValue!: string | number;
  product!: Product | null;
  constructor(
    private dataService: DataService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.products$ = this.dataService.get();// it comes from old services
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
}
