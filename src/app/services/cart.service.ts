import { map } from 'rxjs';
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
    this.cartItems.update((items) => {
      const index = items.findIndex((item) => item.product.id === product.id);

      if (index !== -1) {
        const updateItems = [...items];
        updateItems[index] = { ...updateItems[index], quantity: updateItems[index].quantity + 1 };
        return updateItems;
      } else {
        return [...items, { product, quantity: 1 }];
      }
    });
  }

  onRemove(productId: string): void {
    this.cartItems.update((items) =>
      items
        .map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  }
}
