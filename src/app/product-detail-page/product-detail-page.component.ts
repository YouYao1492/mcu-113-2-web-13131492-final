import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent implements OnInit {
  id = input.required<string>();

  product!: Product;

  readonly router = inject(Router);

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getById(this.id()).subscribe((product) => (this.product = product));
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAdd(): void {
    console.log(this.product);
    // this.router.navigate(['products']);
  }
}
