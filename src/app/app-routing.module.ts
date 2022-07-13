import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './core/components/dynamic-form/dynamic-form.component';
import { LoginComponent } from './core/components/login/login.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products/list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./Products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
    canActivate: [AuthGuard, UserGuard],
  },
  { path: '**', redirectTo: 'products/list' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
