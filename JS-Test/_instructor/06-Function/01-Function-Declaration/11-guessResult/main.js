// function sayHi(age) {
//     if (age < 12) alert("Hi kid");
//   }
//   console.log(sayHi); // f() *
//   console.log(sayHi(10)); // undefined **

  
  
  function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return; // undefined
    } else {
      return "Who are you";
    }
  }
//   console.log(sayHi("John")); // undefined ***
console.log(sayHi()); // Who are you ****