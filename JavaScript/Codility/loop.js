function solution(A) {
    const n = A.length;
    const countSet = new Set();
  
    // Mark the presence of positive integers in the set
    for (let i = 0; i < n; i++) {
      const num = A[i];
      
      if (num > 0) {
        countSet.add(num);
        
      }
      
    }
    // const setArray = Array.from(countSet);
    // console.log(setArray);
  console.log(countSet);
  
    // Find the smallest positive integer not present in the set
    for (let i = 1; i <= n + 1; i++) {
      if (!countSet.has(i)) {
        return i;
      }
    }
  }


  
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

    const A = [7,-2,0,1,2,3,4,6,-3];
    console.log(solution(A));
  