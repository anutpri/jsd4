function indexThreeSquare(arr) {
  return arr.map((item, index) => (index === 3 ? item ** 2 : item));
}

console.log(indexThreeSquare([1, 2, 3, 4])); // [1,2,3,16]

function cb(item, index) {
  return item * 3;
}
const result = [1, 3, 5, 7].map(cb);
// [cb(1,0), cb(3, 1), cb(5, 2), cb(7, 3)] => [3, 9, 15, 21]

// const array1 = [1, 2, 3, 4, 5, 6];
// let square = (arr) => {
//   let newArr = [...arr];
//   newArr.splice(3, 1, arr[3] ** 2);
//   return newArr;
// };
// console.log(square(array1));
// console.log(array1);
