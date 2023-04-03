var name = 'Joe';

function makeUser() { 
  const obj = {name: 'John',ref: this};
  return obj
}
let user = makeUser();
console.log(user)
console.log(user.ref.name); // user.ref == this == window  then this.name == 'Joe' *