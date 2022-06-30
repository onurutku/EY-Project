import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.products$ = this.dataService.get();
  }
}
