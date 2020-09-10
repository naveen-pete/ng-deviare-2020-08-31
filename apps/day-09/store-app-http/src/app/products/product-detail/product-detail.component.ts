import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  product: ProductModel = new ProductModel();
  subProductId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    // subscribe to changes in the parameter
    this.subProductId = this.route.paramMap.subscribe((map) => {
      // read the url parameter
      // this.id = parseInt(map.get('id'));
      this.id = +map.get('id');

      // get the product for the corresponding product id
      this.service.getProduct(this.id).subscribe(
        (product) => {
          this.product = product;
        },  // success callback
        (error) => {
          console.log('Get product failed.');
          console.log('Error:', error);
        }   // failure callback
      );
    });
  }

  onEdit() {
    this.router.navigate(['/products', this.id, 'edit']); // http://localhost:4200/products/1/edit
  }

  onDelete() {
    if (window.confirm('Are you sure?')) {
      this.service.deleteProduct(this.product.id).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error: any) => {
          console.log('Delete product failed.');
          console.log('Error:', error);
        }
      );

    }
  }

  ngOnDestroy() {
    if (this.subProductId) {
      this.subProductId.unsubscribe()
    }
  }

}
