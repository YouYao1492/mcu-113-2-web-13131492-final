import { Component, input, output } from '@angular/core';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  readonly products = input<Product[]>([]);

  readonly view = output<Product>();

  readonly add = output<Product>();

  pageIndex = 1;
}
