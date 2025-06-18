import { computed, Injectable, signal } from '@angular/core';
import { Product } from './../models/product';

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
      const product = items[index];
      result += product.quantity * product.product.price;
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
