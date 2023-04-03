// SUBSTRING


// SLICE === RECORD
/*
s = {
    name : John,
    age : 27
}
*/

let str = 'stringify';
// the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 5)); // strin 
// from 0 to 1, but not including 1, so only character at 0
console.log(str.slice(0, 1)); // s

console.log(str.slice(2)); // ringify
console.log(str.slice(-4, -1)); // gif

console.log( str.substring(2, 6) ); // ring
console.log( str.substring(6, 2) ); // ring
// ...but not for slice:
console.log( str.slice(2, 6) ); // ring (the same)
console.log( str.slice(6, 2) ); // "" (an empty string)


// let str = 'stringify';
// from the 2nd position get 4 characters
console.log(str.substr(2, 4)); // ring
// from the 4th position get 2 characters
console.log(str.substr(-4, 2)); // gi