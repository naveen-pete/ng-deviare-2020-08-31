import { Product, displayProductDetails } from './products';

console.log('JS Modules Demo');

var obj = new Product();
obj.id = 1;
obj.name = 'Samsung Galaxy s10';

obj.show();

displayProductDetails();

