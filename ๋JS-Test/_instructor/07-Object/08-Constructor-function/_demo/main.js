// ### Normal Function 
function myNormalFN () {
    // some code ...
    return 5;
}

// when Execute
let result = myNormalFN()
console.log(result) // 5


// ### Constructor Function 

// ต้นแบบ - Prototype
function MyConstructorFN () {
    // some code
}

// when Execute
let instance  = new MyConstructorFN()


// ###### DEMO - 1

// function User(name) {
  

//    // STEP 1 : this = {} // empty object
//    // STEP 2 : เพิ่ม property ให้ object this (S1)   
//     this.name = name;
//     this.isAdmin = true;
//     this.address = "",
//     this.sayHi = function () {
//         alert("Hello")
//     }

    // STEP 3 : return this // object with property  which predefined
    // SUM : this == instance created by new keyword
//}

// create Instance from Prototype
// let user = new User('john');
// console.log(user)

// let user2 = new User('Jeffy')
// console.log(user2)

//   alert(user.name); // john
//   alert(user.isAdmin); // true

// function CodeCampStudent(name,age) {
//     // S1  this = {}
//     // S2 : defined Property
//     this.name = name
//     this.age = age

//     // S3 : return this

// }


// let user1 = new CodeCampStudent('game',25)
// console.log(user1)

// let user2 = new CodeCampStudent('yun',32)
// console.log(user2)


// function User(name) {
//     // S1 : this = {}
//     // S2 : defined
//     this.name = name;
//     this.sayHi = function () {
//       alert('My name is: ' + this.name);
//     };
//     // this = {name : "John" , sayHi : function(){alert('My name is: ' + this.name)}}
//     // return this ==> instance

//   }

// let john = new User('John');
// john.sayHi(); // My name is: John


// // num <== Number
// const num = 255;
// console.log(num)