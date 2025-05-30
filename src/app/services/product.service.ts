import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
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

  getList(): Product[] {
    return this._data;
  }
}
