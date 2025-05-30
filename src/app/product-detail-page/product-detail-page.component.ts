import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  product = new Product({
    id: 'I',
    name: '產品',
    authors: ['作者甲', '作者乙', '作者丙'],
    company: '博碩文化',
    photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 1580,
  });

  readonly router = inject(Router);

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAdd(): void {
    console.log('add');
  }
}
