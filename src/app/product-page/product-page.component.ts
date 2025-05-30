import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private router = inject(Router);

  products = [
    new Product({
      id: 'A',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),

    new Product({
      id: 'B',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),

    new Product({
      id: 'C',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),

    new Product({
      id: 'D',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];

  onView(product: Product): void {
    this.router.navigate(['products', product.id]);
  }

  onAdd(product: Product): void {
    console.log(product);
  }
}
