console.log('JS functions demo.');

// ES5 - JavaScript version 5.x
// a. named function example
// b. function statement syntax
// function sum(a, b) {
//   return a + b;
// }

// ES5 - JavaScript version 5.x
// a. anonymous function example
// b. function expression syntax
// var sum = function (a, b) {
//   return a + b;
// };

// ES6 / ES2015 (2016, 2017, 2018, ..., 2020)
// Arrow function syntax #1 (Fat Arrow functions)
// var sum = (a, b) => {
//   return a + b;
// };

// Arrow function syntax #2
var sum = (a, b) => a + b;

// Arrow function syntax #3
var double = x => x * 2;

// Arrow function syntax #4
var sayHello = () => console.log('hello');

var result = sum(101, 202);
console.log('sum:', result);

result = double(44);
console.log('double:', result);

sayHello();
