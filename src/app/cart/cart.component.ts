import { CartService } from './../services/cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public cartService = inject(CartService);

  readonly cartItems = this.cartService.cartItems;

  form = new FormGroup({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<string | null>(null, { validators: [Validators.required] }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phone(): FormControl<string | null> {
    return this.form.get('phone') as FormControl<string | null>;
  }

  onRemove(productID: string): void {
    this.cartService.onRemove(productID);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  onSubmit() {
    const order = {
      name: this.name.value,
      address: this.address.value,
      phone: this.phone.value,
      items: this.cartItems(),
    };
    console.log(order);
  }
}
