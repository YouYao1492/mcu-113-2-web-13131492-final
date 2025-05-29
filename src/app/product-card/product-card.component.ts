import { CurrencyPipe } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true })
  id!: string;

  @Input()
  productName!: string;

  @Input()
  author!: string;

  @Input()
  company!: string;

  @Input()
  photoUrl!: string;

  @Input({ transform: numberAttribute })
  price!: number;

  detail(): void {
    console.log('detail');
  }
  add(): void {
    console.log('add');
  }
}
