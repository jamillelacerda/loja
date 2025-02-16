import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Produto1Component } from './products/produto1/produto1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductGalleryComponent,
    ProductDetailComponent,
    HomeComponent,
    Produto1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
