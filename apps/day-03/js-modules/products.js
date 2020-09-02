export class Product {
  constructor() {
    this.id = 0;
    this.name = '';
  }

  show() {
    console.log('id:', this.id);
    console.log('name:', this.name);
  }
}

let products = [
  // product1,
  // product2
];

export function displayProductDetails() {
  console.log('displayProductDetails() is invoked');
}

var obj = new Product();
