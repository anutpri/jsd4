const arr = ['Bilbo', 'Gandalf', 'Nazgul']
let lengths = arr.map(item => item.length);
console.log(lengths); // 5,7,6


const num = [2,4,9,13]
// const square = num.map(item => item ** 2)

const square = num.map(function(item,index,arr){

    // Do logic 

    return item ** 2
})

console.log(square)