// SPREAD OPERATOR (...)
// const arr = [3, 7, 2];
// ...arr => 3, 7, 2
// Math.max(...arr); // Math.max(3, 7, 2)
// const newArr = [...arr]; // [3, 7, 2]

// const firstName = 'John';
// ...firstName => 'J', 'o', 'h', 'n'
// const fNameArr = [...firstName];
// console.log(fNameArr);

// const set = new Set([5, 7, 7, 5, 6]); // {5, 7, 6} , ...set => 5, 7, 6
// console.log(set);
// console.log([...set]);

// CLONE ARRAY
// const arr = [3, 7, 2];
// const clone = [...arr];
// // CONCAT ARRAY
// const a = [4, 5]; // ...a => 4, 5
// const b = [2, 7]; // ...b => 2, 7
// // const c = a.concat(b); // [4, 5, 2, 7]
// const c = [...a, ...b];
// const d = [...a, 0, ...b];

// OBJECT SPREAD
// CLONE OBJECT
// const product = { name: 'Pepsi', price: 20 };
// // ...product => name: 'Pepsi', price: 20
// const clone = { ...product }; // { name: 'Pepsi', price: 20  }
// console.log(clone);

// MERGE OBJECT
const product = { name: 'Pepsi', price: 20 };
const description = { description: 'Pepsi is the best', price: 30 };
Object.assign(product, description);
// { name: 'Pepsi', price: 30, description: 'Pepsi is the best' };
Object.assign(description, product);
// { name: 'Pepsi', price: 20, description: 'Pepsi is the best' };
const mergeObj = { ...product, ...description };
// { name: 'Pepsi', price: 30, description: 'Pepsi is the best' }
