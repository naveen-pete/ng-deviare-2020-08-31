import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  productsChanged: Subject<ProductModel[]> = new Subject<ProductModel[]>();

  private products: ProductModel[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    // create a copy of products array
    // const productsCopy = this.products.slice();
    // const productsCopy = [...this.products];

    // return copy of array of products
    return this.http.get<ProductModel[]>(this.apiUrl);
  }

  addProduct(newProduct: ProductModel): Observable<ProductModel> {
    // add a new product
    // this.products = [...this.products, product];

    // this.productsChanged.next([...this.products]);
    return this.http.post<ProductModel>(this.apiUrl, newProduct);
  }

  getProduct(id: number): Observable<ProductModel> {
    // return this.http.get<ProductModel>(this.apiUrl + '/' + id);  
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: ProductModel) {
    // update a product based on id
    // this.http.patch()
  }

  deleteProduct(productId: number) {
    // delete a product based on id
    var index = this.products.findIndex(p => {
      return p.id === productId;
    });

    this.products.splice(index, 1);

    this.productsChanged.next([...this.products]);
    console.log(`Product with id ${productId} has been deleted.`);
    // this.http.delete();
  }
}
