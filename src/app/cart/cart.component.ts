import { CartService } from './../services/cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private CartService = inject(CartService);

  readonly cartItems = this.CartService.getList();

  readonly total = this.CartService.getTotal();

  form = new FormGroup({
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
  });

  onRemove(productID: string): void {
    this.CartService.onRemove(productID);
  }
}
