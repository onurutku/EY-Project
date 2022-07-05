import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';

@NgModule({
  declarations: [AllProductsComponent, AddNewProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: AllProductsComponent,
      },
      {
        path: 'products/new',
        component: AddNewProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: AddNewProductComponent,
      },
    ]),
  ],
})
export class AdministrationModule {}
