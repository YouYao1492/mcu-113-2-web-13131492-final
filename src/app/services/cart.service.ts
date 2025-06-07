import { Injectable, signal } from '@angular/core';
import { Product } from './../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _cartItems = signal<CartItem[]>([]);

  public readonly cartItems = this._cartItems;

  getList() {
    return this._cartItems;
  }

  onAdd(product: Product): void {
    const currentItems = this._cartItems();
    const existingItem = currentItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      this._cartItems.set(currentItems.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      this._cartItems.set([...currentItems, { product, quantity: 1 }]);
    }
  }

  onRemove(productId: string): void {
    const currentItems = this._cartItems();
    this._cartItems.set(currentItems.filter((item) => item.product.id !== productId));
    this.getTotal();
  }

  getTotal(): number {
    let result = 0;
    const items = this._cartItems();

    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      result += element.quantity * element.product.price;
    }
    return result;
  }
}
