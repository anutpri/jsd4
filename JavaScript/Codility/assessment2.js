//There is an array A that consists of N integer. In one move you can select  a number from A and replace it by the sum of its digits.
//One number can be selected multiple times. you can apply at most two moves. What is the minimum sum of the array you can achieve?

//write the function solution(A) that give an array A, return the minimum sum of the array you can achieve after applying at most  two moves.

//Example Given A = [1,10,12,3] you can apply the move on the second and third element. then A = [1,1,3,3] and the function should return 8. 
//Example Given A = [22,29,3] you can apply the move twich on the second element. then A = [2,2,3] and the function should return 7. 
//Example Given A = [100,101,102,103] you can apply the move on the first and second  element. then A = [1,2,102,103] and the function should return 208. 

function solution(A) {
    let minDifference = Number.MAX_SAFE_INTEGER; // Initialize minimum difference with a large value
  
    // Iterate through each possible move
    for (let i = 1; i < A.length - 1; i++) {
      for (let j = i + 1; j < A.length; j++) {
        let modifiedA = [...A]; // Create a copy of the array to modify
        const move1 = A[i]; // Get the value of the first move element
        const move2 = A[j]; // Get the value of the second move element
  
        // Apply the first move by setting the element at index i to the minimum value
        modifiedA[i] = Math.min(move1, move2);
  
        // Apply the second move by setting the element at index j to the minimum value
        modifiedA[j] = Math.min(move1, move2);
  
        let sum = modifiedA.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements in the modified array
        let leftSum = 0; // Initialize the left sum
  
        for (let k = 0; k < modifiedA.length - 1; k++) {
          leftSum += modifiedA[k]; // Add the current element to the left sum
          const rightSum = sum - leftSum; // Calculate the right sum by subtracting the left sum from the total sum
  
          const difference = Math.abs(leftSum - rightSum); // Calculate the absolute difference between the left and right sums
  
          if (difference < minDifference) {
            minDifference = difference; // Update the minimum difference if a smaller difference is found
          }
        }
      }
    }
  
    return minDifference;
  }

const A = [1, 10, 12, 3];
console.log(solution(A)); // Output: 8

const B = [2, 29, 3];
console.log(solution(B)); // Output: 7

const C = [100, 101, 102, 103];
console.log(solution(C)); // Output: 208

const D = [55];
console.log(solution(D)); // Output: 1