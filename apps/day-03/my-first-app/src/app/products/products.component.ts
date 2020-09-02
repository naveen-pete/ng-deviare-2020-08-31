import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',  // external template

  // --- inline template ---
  // template: `
  //   <h3>Inline template demo</h3>
  //   <p class="bg-yellow">My para</p>
  //   <div>div demo</div>
  // `,

  styleUrls: ['./products.component.css']  // external styles

  // --- inline style(s) ---
  // styles: [
  //   `h3 { 
  //     text-decoration: underline; 
  //   }`,
  //   '.bg-yellow {background-color: yellow; }'
  // ]
})
export class ProductsComponent {
  productId: number = 10;
  productName: string = 'iPhone X';  // 'Samsung Galaxy S10'

  constructor() {
    // this.productId = 10;
    // this.productName = 'iPhone X';
  }

  onSave() {
    console.log('Product information is getting saved.');
  }

  onSearch(event) {
    console.log('onSearch() method called.');
    console.log('event:', event.target.value);
  }

}
