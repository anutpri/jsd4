//let arr = [1, 2];
//let arr2 = [3,4]
// create an array from: arr and [3,4]

//let newArr = arr.concat(arr2)
//console.log(newArr); // 1,2,3,4
//console.log(arr)
//console.log(arr2)



// // create an array from: arr and [3,4] and [5,6]
//console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
//console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// ############# SLICE 
let arr = ['t', 'e', 's', 't'];

let newArr = arr.slice(1, 3)
console.log(newArr); // e,s (copy from 1 to 3)
console.log(arr)


// console.log(arr.slice(-2)); // s,t (copy from -2 till the end)

let clone = arr.slice();
console.log(clone); // t, e, s, t


// ############# SPREAD 

const animals = ["Rat","Pig","Chicken"]

const newAnimal = [...animals]

console.log(animals)
console.log(newAnimal)