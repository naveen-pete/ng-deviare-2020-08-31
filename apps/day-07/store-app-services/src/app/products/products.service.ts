import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // EventEmitter - use this only when a child component wants to interact with its parent
  // Service to Component notification
  productsChanged: Subject<ProductModel[]> = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
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

  getAllProducts() {
    // create a copy of products array
    // const productsCopy = this.products.slice();
    const productsCopy = [...this.products];

    // return copy of array of products
    return productsCopy;
  }

  addProduct(newProduct: ProductModel) {
    const product = {
      ...newProduct,
      id: Date.now()
    };

    // add a new product
    this.products = [product, ...this.products];

    this.productsChanged.next([...this.products]);
  }

  getProduct(productId: number) {
    const product = this.products.find(p => {
      return p.id === productId;
    });

    // return a product based on id
    return { ...product };
  }

  updateProduct(id: number, product: ProductModel) {
    // update a product based on id
  }

  deleteProduct(productId: number) {
    // delete a product based on id
    var index = this.products.findIndex(p => {
      return p.id === productId;
    });

    this.products.splice(index, 1);

    this.productsChanged.next([...this.products]);
    console.log(`Product with id ${productId} has been deleted.`);
  }
}
