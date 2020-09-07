console.log('ES6 Features Demo.');

// var   - ES5
// let   - ES6 
// const - ES6

const a = 10;

console.log('(start) outside block a:', a);

// if(<some-condition>) 
// function someFn() 
{
  let a = 20;

  a = a + 20;

  console.log('inside block a:', a);
}

console.log('(end) outside block a:', a);

// Scope - ES5 (<2015)
// 1. Global
// 2. Function

// Scope - ES6 + (>= 2015)
// 1. Global
// 2. Function
// 3. let / const - Block level scope
