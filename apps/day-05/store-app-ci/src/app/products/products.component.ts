import { Component, OnInit } from '@angular/core';

import { ProductModel } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  today = Date.now();

  productList: ProductModel[] = [
    {
      id: 1,
      name: 'ASUS VivoBook',
      price: 56500,
      description: 'ASUS X409 is the entry-level laptop that delivers powerful performance and immersive visuals',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Lenovo Ideapad Slim',
      price: 34990,
      description: 'Engineered for long-lasting performance, the Lenovo IdeaPad Slim 3 delivers powerful performance in an entry-level laptop',
      isAvailable: false
    },
    {
      id: 3,
      name: 'HP Chromebook',
      price: 30700,
      description: 'The best of work and play in one place',
      isAvailable: true
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  onProductSaved(newProduct: ProductModel) {
    this.productList.unshift(newProduct);
  }
}
