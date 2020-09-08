import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  constructor(private service: ProductsService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.service.addProduct(this.product);
    this.product = new ProductModel();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 4000);
  }

}
