import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  today = Date.now();
  productList: ProductModel[] = [];
  subProductsChanged: Subscription;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.subProductsChanged = this.service.productsChanged.subscribe((products) => {
      this.productList = products;
    });

    this.productList = this.service.getAllProducts();
  }

  ngOnDestroy() {
    if (this.subProductsChanged) {
      this.subProductsChanged.unsubscribe();
    }
  }
}
