/*

IF n == undefiend OR n == 1 
    RETURN first element
ELSE (n > 1)
    RETURN first n elements
*/


function first(arr,n) {

    if (n === undefined || n === 1) {
        // return arr[0]
        return arr.slice(0,1)
    } else {
        return arr.slice(0,n)
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3)); 
console.log(first([7, 9, 0, -2], 3));