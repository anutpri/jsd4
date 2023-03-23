const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

// let sum1 = [5,nums1,-6,nums2]
let sum2 = [5, ...nums1, -6, -1, ...nums2];

// console.log(sum1)
console.log(sum2);

let overall = sum2.reduce((a, c) => a + c, 0);

console.log(overall);
