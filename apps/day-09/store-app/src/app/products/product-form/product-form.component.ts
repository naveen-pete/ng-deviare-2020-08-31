import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  showMessage: boolean = false;
  product: ProductModel = new ProductModel();

  addNew: boolean = true;

  subProductId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    // subscribe to changes in the parameter
    this.subProductId = this.route.paramMap.subscribe((map) => {
      if (map.get('id')) {
        // read the url parameter
        // this.id = parseInt(map.get('id'));
        this.id = +map.get('id');

        // get the product for the corresponding product id
        this.service.getProduct(this.id).subscribe(
          (product) => {
            this.product = product;
            this.addNew = false;
          },  // success callback
          (error) => {
            console.log('Get product failed.');
            console.log('Error:', error);
          }   // failure callback
        );
      }
    });
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('Product form is invalid.');
      return;
    }

    const product = {
      ...form.value,
      price: form.value.price ? +form.value.price : 0,
      isAvailable: form.value.isAvailable || false
    }

    if (this.addNew) {
      this.service.addProduct(product).subscribe(
        () => {
          this.product = new ProductModel();
          this.router.navigate(['/products']);
        },  // success callback
        (error) => {
          console.log('Add product failed.');
          console.log('Error:', error);
        }   // failure callback
      );
    } else {
      this.service.updateProduct(this.id, this.product);
    }
  }

}
