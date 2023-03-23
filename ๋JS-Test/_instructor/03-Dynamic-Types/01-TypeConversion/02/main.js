let a = undefined;
let b = null;
let c = b + '4 2'; // "null4 2"

let d = Number(undefined) // NaN
let e = +b; // 0
let f = c*1; // NaN

console.log("C:",c)
console.log("D:",d)
console.log("E:",e)
console.log("F:",f)