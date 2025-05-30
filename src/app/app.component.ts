import { Component } from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './models/product';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
}
