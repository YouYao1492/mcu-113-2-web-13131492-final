import { Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

export const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'di', component: ProductDetailPageComponent },
];
