// let message = 'Hello!';
// let phrase = message;
// message = 'Hi!';
// console.log(message); // Hi!
// console.log(phrase); // Hello!


let user = {
    name: 'John'
  };

let admin = user;

user.name = 'Jame';
console.log(user.name); // Jame
console.log(admin.name); // Jame
