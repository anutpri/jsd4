const array = [29, 17, 13, 47, 23, 31];


//let sum = 0

//# 1
// for(let i = 0; i < array.length;i++){
//      sum += array[i]
// }

// # 2 : For In
// for(let index in array) {
//     sum += array[index]
// }

// #3 : ForOF

// for(let item of array){
//     sum += item
// }


// #4 ForEach
let sum = 0

function runEveryItems(item,index,array){
        sum += item
}

//array.forEach(runEveryItems) // param1 : function 
array.forEach((el,idx,arr)=> {
    sum += el;
})

console.log(sum)