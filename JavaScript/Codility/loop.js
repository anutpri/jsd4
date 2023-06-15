// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
  // Implement your solution here
  let n = A.length;
  let newA = [];

  for (let i = 0; i < n; i++){
      if (A[i]>0){
          newA.push(A[i]);
      }
  }
  
  let result = '';
  for (let i = 1; i <= newA.length + 1; i++){
      if(!newA.includes(i)){
          result = i;
          break;
      }
  }
return result;
}





// function solution(A) {
//     const n = A.length;
//     const countSet = new Set();
  
//     // Mark the presence of positive integers in the set
//     for (let i = 0; i < n; i++) {
//       const num = A[i];
      
//       if (num > 0) {
//         countSet.add(num);
        
//       }
      
//     }
//     // const setArray = Array.from(countSet);
//     // console.log(setArray);
//   console.log(countSet);
  
//     // Find the smallest positive integer not present in the set
//     for (let i = 1; i <= n + 1; i++) {
//       if (!countSet.has(i)) {
//         return i;
//       }
//     }
//   }


  
//   function solution(A) {
//     const n = A.length;
//     const count = Array(n + 1).fill(false);
  
//     // Mark the presence of positive integers in the count array
//     for (let i = 0; i < n; i++) {
//       const num = A[i];
//       if (num > 0 && num <= n) {
//         count[num] = true;
        
//       }
//     }
//   console.table(count);
//     // Find the smallest positive integer not present in the count array
//     for (let i = 1; i <= n + 1; i++) {
//       if (!count[i]) {
//         return i;
//       }
//     }
    
//   }


// function solution(A){

//     const N = A.length;
//     const checkNum = Array(N+1).fill(false);
    
//     A.forEach(num =>{
//         if (num > 0 && num < N) {
//             checkNum[num] = true;
//         }

//     });
   
//     console.table(checkNum);
    

//     for (let i = 1; i <= N + 1; i++) {
//               if (!checkNum[i]) {
//                 return i;
//               }
//             }
// }

    const A = [1, 2, 3];
    console.log(solution(A));
  