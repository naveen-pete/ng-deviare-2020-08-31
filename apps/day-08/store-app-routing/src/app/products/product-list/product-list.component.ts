import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel[] = [];
  subProductsChanged: Subscription;

  constructor(
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.subProductsChanged = this.service.productsChanged.subscribe((products) => {
      this.products = products;
    });

    this.products = this.service.getAllProducts();
  }

  ngOnDestroy() {
    if (this.subProductsChanged) {
      this.subProductsChanged.unsubscribe();
    }
  }

  onAdd() {
    this.router.navigate(['/products/new']);
  }

}
