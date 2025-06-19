import { CurrencyPipe } from '@angular/common';
import { booleanAttribute, Component, HostBinding, input, numberAttribute, output } from '@angular/core';

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

  readonly isDiscount = input.required<boolean, string | boolean>({ transform: booleanAttribute });

  readonly photoUrl = input<string>();

  readonly price = input<number, number | string>(0, { transform: numberAttribute });

  readonly view = output<void>();

  readonly add = output<void>();

  @HostBinding('class')
  class = 'app-product-card';
}
