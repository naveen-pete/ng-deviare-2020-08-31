console.log('ES6 Features Demo.');

const a1 = [1, 2, 3];

// const a2 = a1;
// const a2 = a1.slice();

// spread syntax - create a copy or an array / object
const a2 = [...a1];

console.log('a1:', a1);
console.log('a2:', a2);

a2[1] = 100;

console.log('a1:', a1);
console.log('a2:', a2);

const c = {
  id: 1,
  name: 'Deviare'
};

// const d = c;
const d = {
  ...c,
  city: 'Cape Town'
};

console.log('c:', c);
console.log('d:', d);

c.id = 100;

console.log('c:', c);
console.log('d:', d);
