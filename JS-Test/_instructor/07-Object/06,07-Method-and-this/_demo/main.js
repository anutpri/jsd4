// ### 
// let user = {
//     name: 'John',
//     age: 30
//   };
//   user.sayHi = function () { // sayHi is a method of the object user
//     alert('Hello!');
//   };

// let user = {
//     name : 'John',
//     age : 30,
//     // sayHi : function () { alert("Hello_")}
//     sayHi : () => { alert("Hello_Arrow")}
// }

// user.sayHi(); // Hello!


// #### 2

// const cat = {
//     age : 2,
//     name : "ChaYen", 
//     // roar : function() { alert("Meow Meow")}, // method
//     roar() { alert("Meow Meow")}, // method shorthand
//     sleep : () => {alert("Dont bother me !! ")}
// }

// cat.roar() // this = cat
// // cat.sleep()


// ########################### THIS KEYWORD Ch.1

// FN-DECLARATION
//function a(){
//  console.log("##",this)
//}

//a(); // this == window
//window.a() // this == window


// FN-EXPRESSION ==> dont attached with window Object
//let b = function () {
//    console.log("##",this)
// }
 
// b() // this == window
//window.b() // Error : window.b is not a function


// FN-EXPRESSION-ARROW
// var c = () => console.log("$$",this)
//let c= () => console.log("$$",this)
//c() // this === window object
//window.c() // Error : window.b is not a function


// ################### Chap.2 STRICT MODE

// 'use strict'
// function a(){
//     console.log("##",this) // window ,undefined (strict-mode)
//  }
 
// console.log("$$$$",this) // this === window
//  a(); // this === undefined


// ##################### Chap.3 This in METHOD

// let d = {
//     name : "codecamp",
//     age :  12,
//     increase : function (){
//         console.log("IN METHOD INCREASE",this)
//         this.age += 1;
//     },
//     decrease : function () {
//         console.log("IN METHOD DECREASE",this)
//         this.age -= 1; // d.age -=1
//     }
//  }
//  d.increase() // this === who called me ? === object d 

//  console.log(d.age)  // 12 + 1

//  d.decrease() // this === execute context === object d
//  d.decrease()
//  console.log(d.age)  // 11

// ##################### Chap.3.5 This in METHOD

// function increase () {
//     console.log("INC",this)
//     this.age += 1 // user1.age += 1 or user2.age +=1 depend on CONTEXT,INVOKING OBJ
// }
 
// function decrease () {
//     console.log("DEC",this)
//     this.age -= 1
// }
 
// const user1 = {
//     name:"John",
//     age: 12,
//     increase : increase,
//     decrease: decrease
// }

// const user2 = {
//     name:"Susy",
//     age: 32,
//     increase : increase,
//     decrease: decrease
// }

// user1.increase() // this === user1
// console.log(user1)

// user2.decrease() // this === user2
// console.log(user2)

// ##################### Chap.3.5 SS2 This in METHOD
// function foo() {
//     console.log(this.bar);
// }
// var bar = "global";

// let obj1 = { bar: "obj1", foo:foo};
// let obj2 = { bar: "obj2", foo:foo};
// let obj3 = { bar: "obj3"}
//    // --------
   
//    // console.log(window)
// foo(); // "global"
// obj1.foo() // 'obj1'
// obj2.foo() // 'obj2'

// foo.call(obj3) // EXPLICIT RESOLVE THIS ==> LOG obj3


// ##################### Chap.4  This in METHOD:ARROW FUNCTION



// DECLARATION
// function sayHi () {
//     console.log(this.firstName)
// }

// ARROW
// let sayHi = () => {console.log(this.firstName)}


// var firstName = "John"

// let user = {
//    firstName: 'Ilya',
//    sayHi : sayHi,
//  };


// sayHi(); // DECLARATION : John    VS  ARROW : John 
// user.sayHi(); // DECLARATION : Ilya VS ARROW : John (losing this == losing this)

// ###### RECOMMEND : Arrow function use for non-method function

// var globalB = () => console.log(this.i, this)
const obj = {  
    i: 10,
    b: () => console.log(this.i, this), // LOSING THIS
    // b : globalB,
    c: function (){
        // c : FN:DECLARATION == CAN RESOLVE THIS === c : this == obj
        //  console.log(this.i, this);
        console.log(this)
        
        let d = () => console.log(this.i, this) 
        // d : FN:ARROW : CAN'T RESOLVE this ==> INHERIT from C ==> d : this == obj
        d()
    },
  
   }
   
obj.b(); // prints undefined, Window { /* … */ } (or the global object)
obj.c(); // prints 10, Object { /* … */ }
   
   