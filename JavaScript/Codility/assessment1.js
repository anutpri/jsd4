// A string S made of uppercase in english letter is given ; in one move six letter forming the word "BANANA" can be delete from S. what the maximum number times such a move can be applies to S

// create function in JS to do that given a string of length N, return the maximum number of move
// example
// given S = "NAABXXAN", the function should return 1
// given S= "QABAAAWOBL", the function should return 0


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here

    const n = S.length;
    const remove = {A:3,B:1,N:2};
    const count = {};
    const move = [];

    for (let i = 0; i < n; i++){
        const letter = S[i];
        count[letter] = (count[letter] || 0 ) + 1;

    }

    for (const [letter, quantity] of Object.entries(remove)) {
    const letterCount = count[letter] || 0;
    move.push(Math.floor(letterCount / quantity));
    }

    const result = Math.min(...move, Math.floor(n / 6));
    return result;
}




const S1 = "NAABXXAN";
const maxMoves1 = solution(S1);
console.log("Maximum moves for S1:", maxMoves1); // Output: 1

const S2 = "NAANAAXNABABYNNBZ";
const maxMoves2 = solution(S2);
console.log("Maximum moves for S2:", maxMoves2); // Output: 2

const S3 = "QABAAAWOBL";
const maxMoves3 = solution(S3);
console.log("Maximum moves for S3:", maxMoves3); // Output: 0