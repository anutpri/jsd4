// function multiply(...nums) {
//   let result = 1;
//   for (let num of nums) {
//     result *= num;
//   }
//   return result;
// }

const multiply = (...nums) => nums.reduce((acc, item) => acc * item, 1);
console.log(multiply(4));
