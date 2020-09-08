import { Component, OnInit } from '@angular/core';
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
        this.product = this.service.getProduct(this.id);
        this.addNew = false;
      }
    });
  }


  onSubmit() {
    if (this.addNew) {
      this.service.addProduct(this.product);
    } else {
      this.service.updateProduct(this.id, this.product);
    }

    this.product = new ProductModel();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 4000);

    this.router.navigate(['/products']);
  }

}
