import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ShellComponent } from './core/components/shell/shell.component';
import { HeaderComponent } from './core/components/shell/header/header.component';
import { FooterComponent } from './core/components/shell/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
