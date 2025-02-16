import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-product-gallery',
    templateUrl: './product-gallery.component.html',
    styleUrls: ['./product-gallery.component.scss'],
    standalone: false
})
export class ProductGalleryComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
