import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any, searchValue: any): Product[] {
    if (products?.length === 0 || !searchValue) {
      return products;
    }
    const filteredProducts: Product[] = [];
    for (let product of products) {
      if (product.title.toUpperCase().includes(searchValue.toUpperCase())) {
        filteredProducts.push(product);
      }
    }
    return filteredProducts;
  }
}
