import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { enableDebugTools } from '@angular/platform-browser';

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
    new Product({
      id: 'E',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 'F',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 'G',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 'H',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 'I',
      name: '產品',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];

  getList(name: string | undefined, index: number, size: number): { data: Product[]; count: number } {
    const startIndex = (index - 1) * size;
    const endIndex = startIndex + size;
    const data = name ? this._data.filter((item) => item.name === name) : [...this._data];
    return { data: data.slice(startIndex, endIndex), count: this._data.length };
  }
}
