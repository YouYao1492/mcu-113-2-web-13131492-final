import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { productResolver } from './resolver/product.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/:id', component: ProductDetailPageComponent, resolve: { product: productResolver } },
  { path: 'cart', component: CartComponent },
];
