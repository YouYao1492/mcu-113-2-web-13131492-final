import { computed, Injectable, signal } from '@angular/core';
import { Product } from './../models/product';
import { computeMsgId } from '@angular/compiler';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartItems = signal<CartItem[]>([]);

  readonly cartLength = computed(() => {
    return this.cartItems().length;
  });

  readonly total = computed(() => {
    let result = 0;
    const items = this.cartItems();

    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      result += element.quantity * element.product.price;
    }
    return result;
  });

  onAdd(product: Product): void {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      this.cartItems.set(currentItems.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      this.cartItems.set([...currentItems, { product, quantity: 1 }]);
    }
  }

  onRemove(productId: string): void {
    const currentItems = this.cartItems();
    this.cartItems.set(currentItems.filter((item) => item.product.id !== productId));
  }
}
