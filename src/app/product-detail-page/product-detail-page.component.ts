import { ProductService } from './../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  readonly product = input.required<Product>();

  readonly router = inject(Router);

  private ProductService = inject(ProductService);

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAdd(): void {
    console.log(this.product);
    // this.router.navigate(['products']);
  }
}
