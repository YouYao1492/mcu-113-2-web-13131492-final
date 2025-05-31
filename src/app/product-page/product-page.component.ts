import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { PaginationComponent } from './../pagination/pagination.component';
import { ProductService } from './../services/product.service';
import { BehaviorSubject, combineLatest, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  imports: [PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
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

  totalCount = 0;

  products: Product[] = [];

  ngOnInit(): void {
    combineLatest([this.pageIndex$, this.refresh$.pipe(startWith(undefined))])
      .pipe(switchMap(() => this.productService.getList(undefined, this.pageIndex, this.pageSize)))
      .subscribe(({ data, count }) => {
        this.products = data;
        this.totalCount = count;
      });
  }

  onView(product: Product): void {
    this.router.navigate(['products', product.id]);
  }

  onAdd(product: Product): void {
    console.log(product);
  }
}
