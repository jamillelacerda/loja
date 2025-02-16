import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-produto1',
    templateUrl: './produto1.component.html',
    styleUrls: ['./produto1.component.scss'],
    standalone: false
})
export class Produto1Component {
  product: Product | undefined;
  selectedImage: string | null = null;

  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      300: { items: 2 },
      600: { items: 3 }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(productId);
  }
}
