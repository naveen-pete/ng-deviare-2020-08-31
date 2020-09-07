import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productSaved = new EventEmitter<ProductModel>();

  showMessage: boolean = false;

  product: ProductModel = new ProductModel();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productSaved.emit(this.product);
    this.product = new ProductModel();

    this.showMessage = true;

    // var obj = this;

    // setTimeout(function () {
    //   console.log('setTimeout() callback - this:', this);
    //   obj.showMessage = false;
    //   console.log('callback function called. showMessage reset to false.');
    // }, 4000);

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }

}
