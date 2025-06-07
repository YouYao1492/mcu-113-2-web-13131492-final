import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  form = new FormGroup({
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
  });
}
