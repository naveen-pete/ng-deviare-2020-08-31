import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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
    const authToken = 'abc12345';
    const myHeaders = new HttpHeaders({ 'my-auth-token': authToken });
    const myParams = new HttpParams().set('my-auth-token', authToken);

    return this.http.get<ProductModel[]>(
      this.apiUrl,
      {
        headers: myHeaders,
        params: myParams
      }
    )
      .pipe(
        // operator 1
        // map((products: ProductModel[]) => {
        //   const transformedProducts = [];
        //   products.forEach(p => {
        //     const tempProduct = {
        //       id: p.id,
        //       name: p.name
        //     };
        //     transformedProducts.push(tempProduct);
        //   });
        //   console.log('transformedProducts:', transformedProducts);
        //   return transformedProducts;
        // }),

        // operator 2
        tap((products: ProductModel[]) => {
          this.products = [...products];
        })
      );
  }

  addProduct(newProduct: ProductModel): Observable<ProductModel> {
    // add a new product
    return this.http.post<ProductModel>(this.apiUrl, newProduct)
      .pipe(
        tap((newProduct: ProductModel) => {
          this.products = [...this.products, newProduct];
          this.productsChanged.next([...this.products]);
        })
      );
  }

  getProduct(id: number): Observable<ProductModel> {
    // return this.http.get<ProductModel>(this.apiUrl + '/' + id);  
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: ProductModel) {
    // update a product based on id
    // this.http.patch() / this.http.put()
  }

  deleteProduct(id: number): Observable<any> {
    // delete a product based on id
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() => {
          const index = this.products.findIndex(p => {
            return p.id === id;
          });

          this.products.splice(index, 1);

          this.productsChanged.next([...this.products]);
        })
      );
  }
}
