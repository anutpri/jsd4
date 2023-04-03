// function doubleAndReturnArgs(arr, ...numbers) {
//   let numbersMultiply = numbers.map(function (item) {
//     return item * 2;
//   });
//   return [...arr, ...numbersMultiply];
// }
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));

// const doubleAndReturnArgs = (...arr) =>
//   arr.reduce(
//     (resultArr, cur) =>
//       Array.isArray(cur) ? [...resultArr, ...cur] : [...resultArr, cur * 2],
//     []
//   );

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));
