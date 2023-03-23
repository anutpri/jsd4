// const filterOutOdds = (...nums) => nums.filter((cur) => cur % 2 == 0);
// console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 11, 22, 33, 22, 1213, 4, 5));

const filterOutOdds = (...numbers) => {
  return numbers.reduce(function (acc, item) {
    if (item % 2 == 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};
console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 22));
