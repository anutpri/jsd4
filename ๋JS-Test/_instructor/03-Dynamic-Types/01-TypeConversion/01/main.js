let a = undefined;
let b = 2;
let c = a++;

// String(undefined) ==> "undefined" ==> NaN
// Number(undefined) ==> NaN
let d;
let e;
let f;

d = String(a);
e = ""+b;
f = `${c}`

console.log("d:",d)
console.log("e:",e)
console.log("f:",f)