import { CurrencyPipe } from '@angular/common';
import { Component, HostBinding, input, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly id = input.required<string>();

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly photoUrl = input<string>();

  readonly price = input<number, number | string>(0, { transform: numberAttribute });

  readonly view = output<void>();

  @HostBinding('class')
  class = 'app-product-card';

  add(): void {
    console.log('add');
  }
}
