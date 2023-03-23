const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];


//   LESS ==> MORE
// SWITCH : a > b  : a-b > 0 
// DONT SWITCH : a <= b : a-b <= 0

arr.sort((a,b) => a.age - b.age) //?