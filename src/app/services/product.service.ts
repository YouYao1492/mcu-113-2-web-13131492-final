import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { enableDebugTools } from '@angular/platform-browser';
import { delay, filter, map, mergeMap, Observable, of, toArray } from 'rxjs';

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

  getById(productId: string): Observable<Product> {
    return of(this._data).pipe(
      mergeMap((data) => data),
      filter(({ id }) => id === productId)
    );
  }

  getList(name: string | undefined, index: number, size: number): Observable<{ data: Product[]; count: number }> {
    return of(this._data).pipe(
      mergeMap((data) => data),
      filter((item) => (name ? item.name === name : true)),
      toArray(),
      map((data) => {
        const startIndex = (index - 1) * size;
        const endIndex = startIndex + size;
        return { data: data.slice(startIndex, endIndex), count: data.length };
      }),
      delay(500)
    );
  }
}
