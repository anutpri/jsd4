/*
rarely : indexOf,lastIndexOf,includes
FREQ : find,findIndex,filter
*/

// const arr = ["H","E","L","L","O","E","E"]

// let result = arr.find(function (item, index, array) {
//     console.log(item,index)

//      if(item === 'E') {
//         return true
//      }
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
//   });

// let result = arr.find(item => item === 'E');


const arr = [
    {species : 'cat', name : 'cha-nom'},
    {species : 'dog', name : 'o-leang'},
    {species : 'bird', name : 'jib'},
    {species : 'cat', name : 'cha-chak'},
    {species : 'bird', name : 'mali'}
]

// ### FIND
// const result = arr.find(item=> item.species === 'bird')
// console.log(result)

// ### FILTER
// const result = arr.filter(function (item,index,array) {

//     if(item.species === 'bird') {
//         return true
//     } else {
//         return false
//     }
// })

// const result = arr.filter(function (item,index,array) {

//     return item.species === 'bird' 
// })

//const result = arr.filter((item)=> item.species === 'bird')

const result = []

for(let i = 0 ; i < arr.length; i++) {
    if(arr[i].species === 'bird') {
        result.push(arr[i])   
    }
}


console.log(result)