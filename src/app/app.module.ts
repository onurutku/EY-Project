import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './core/components/shell/shell.component';
import { HeaderComponent } from './core/components/shell/header/header.component';
import { FooterComponent } from './core/components/shell/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './Products/products.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdministrationModule } from './Administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    AdministrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
