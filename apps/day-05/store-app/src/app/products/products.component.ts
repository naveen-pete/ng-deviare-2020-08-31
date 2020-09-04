import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  today = Date.now();

  product: ProductModel = new ProductModel();

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
    },
    {
      id: 4,
      name: 'Acer One',
      price: 32999,
      description: 'PMD4415U,4GB DDR4,1TB (5.4krpm),No DVDRW,14"(1366x768),HD Cam, Microphone',
      isAvailable: false
    }
  ];

  // product: ProductModel;

  constructor() {
    // this.product = new ProductModel();
    // this.product.id = 1;
    // this.product.name = '';
    // this.product.description = '';
    // this.product.price = 56500;
    // this.product.isAvailable = true;
  }

  ngOnInit(): void { }

  onSubmit() {
    this.productList.unshift(this.product);
    this.product = new ProductModel();
  }
}

class ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}
