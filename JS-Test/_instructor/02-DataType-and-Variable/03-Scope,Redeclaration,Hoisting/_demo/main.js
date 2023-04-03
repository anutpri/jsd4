// ##### SCOPE
// {
//     var name = "john";
//     let isMan = true
//     const age = 37
 
//     console.log(name) // 'john'
//     console.log(isMan) // true
//     console.log(age) // 37
//  }
//  console.log(name) // 'john'
 //console.log(isMan) // Reference Error
 //console.log(age) // Reference Error

//  for (var i = 0; i < 3; i++){
//     // console.log(i)
//  }
//  console.log(i) // 0 1 2 3

// for (let i = 0; i < 3; i++){
//     // console.log(i)
//  }
//  console.log(i) // 0 1 2 3

// function newFunction() {
//     var hello = 'hello';
//     const say = 'say';
//     console.log(`FUNC SCOPE : ${hello}`)
//   }
// newFunction()
//   console.log(hello); // Uncaught ReferenceError: hello is not defined
//   console.log(say);


// #### REDECLARATION

// let name = "John"
// {
//     let name = "PP"
// }

// const lastname = "SS"
// {
//     const lastname = "AA"
// }

// var age = 20
// var age = 35


// Hoisting

// console.log(name)
// let name = "John"


console.log(name)
var name = "John"

