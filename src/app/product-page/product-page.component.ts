import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, startWith, Subject, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { PaginationComponent } from './../pagination/pagination.component';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  private router = inject(Router);

  private productService = inject(ProductService);

  private readonly pageIndex$ = new BehaviorSubject(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  private readonly refresh$ = new Subject<void>();

  pageSize = 5;

  private readonly data$ = combineLatest([this.pageIndex$, this.refresh$.pipe(startWith(undefined))]).pipe(
    switchMap(() => this.productService.getList(undefined, this.pageIndex, this.pageSize))
  );

  private readonly data = toSignal(this.data$, { initialValue: { data: [], count: 0 } });

  readonly totalCount = computed(() => {
    const { count } = this.data();
    return count;
  });

  readonly products = computed(() => {
    const { data } = this.data();
    return data;
  });

  onView(product: Product): void {
    this.router.navigate(['products', product.id]);
  }

  onAdd(product: Product): void {
    console.log(product);
  }
}
function compute(arg0: () => any) {
  throw new Error('Function not implemented.');
}
