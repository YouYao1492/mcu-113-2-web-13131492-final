import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productName = '產品';
  author = '作者甲、作者乙、作者丙';
  company = '博碩文化';

  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  price = 1000;

  detail(): void {
    console.log('detail');
  }
  add(): void {
    console.log('add');
  }
}
