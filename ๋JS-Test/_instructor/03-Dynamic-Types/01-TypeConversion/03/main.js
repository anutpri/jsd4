let a = undefined;
let b = " "; // true value
let c = !b; // false


let d = Boolean(a) // false
let e = !!b; // true
let f = Boolean(c) // false

console.log("C:",c) // false
console.log("D:",d) // false
console.log("E:",e) // true
console.log("F:",f) // false