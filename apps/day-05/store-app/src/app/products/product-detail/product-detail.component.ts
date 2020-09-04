import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() deleteProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteProduct.emit(this.product.id);
  }

}
