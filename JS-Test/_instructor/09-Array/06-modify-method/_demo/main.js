// ## DELETE
// let arr = ['I', 'study', 'JavaScript'];
// let res = arr.splice(1, 1); // from index 1 remove 1 element


// console.log(arr); // ["I", "JavaScript"]
// console.log(res)


// ### DELETE & INSERT
// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", 'dance');
// console.log(arr); // now ["Let's", "dance", "right", "now"]

// #### INSERT **
let arr = ['I', 'study', 'JavaScript'];
// from index 2
// delete 0
// then insert "complex" and "language"
const res = arr.splice(2, 0, 'complex', 'language');
console.log(arr); // "I", "study", "complex", "language", "JavaScript"
console.log(res) // [] 