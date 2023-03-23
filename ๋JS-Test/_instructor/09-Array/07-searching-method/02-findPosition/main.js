const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// #1 for in 

//let result = []

// for (let index in alphabets) {
//     if (alphabets[index] === 'a'){
//         result.push(index)
//     }
// }

// console.log(result)


// #2 IndexOf  
/* IDEA 
1st search ==> found ==> know index (1)
2nd search ==> starting from index (1st search)
..
..
..
Nth search ==> found ==> index === -1 (notfound)
*/

let result = []
let foundIndex =  alphabets.indexOf('a')

do {

    if(foundIndex !== -1){
        result.push(foundIndex)
        foundIndex = alphabets.indexOf('a',foundIndex+1)
    }

} while (foundIndex !== -1)

console.log(result)