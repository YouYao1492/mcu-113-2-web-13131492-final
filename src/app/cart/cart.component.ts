import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public cartService = inject(CartService);

  private readonly HttpClient = inject(HttpClient);

  readonly cartItems = this.cartService.cartItems;

  readonly total = this.cartService.total;

  form = new FormGroup({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<string | null>(null, { validators: [Validators.required] }),
    cart: new FormArray<FormGroup<any>>([], { validators: [Validators.required] }),
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

  get cart(): FormArray<FormGroup<any>> {
    return this.form.get('cart') as FormArray<FormGroup<any>>;
  }

  ngOnInit(): void {
    const items = this.cartItems();
    for (let index = 0; index < items.length; index++) {
      const product = items[index];
      const cartItemGroup = new FormGroup({
        productId: new FormControl<string | null>(product.product.id),
        productName: new FormControl<string | null>(product.product.name),
        quantity: new FormControl<number | null>(product.quantity),
        productPrice: new FormControl<number | null>(product.product.price),
      });

      this.cart.push(cartItemGroup);
    }
  }

  onRemove(productId: string): void {
    this.cartService.onRemove(productId);
  }

  onSubmit(): void {
    const order = {
      name: this.name.value,
      address: this.address.value,
      phone: this.phone.value,
      cart: this.cart.value,
    };
    this.HttpClient.post('http://localhost:3000/orders', order).subscribe();
  }
}
