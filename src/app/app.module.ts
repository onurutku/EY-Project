import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './core/components/shell/shell.component';
import { HeaderComponent } from './core/components/shell/header/header.component';
import { FooterComponent } from './core/components/shell/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './Products/products.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdministrationModule } from './Administration/administration.module';
import { LoginComponent } from './core/components/login/login.component';
import { DynamicFormComponent } from './core/components/dynamic-form/dynamic-form.component';
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    AdministrationModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
