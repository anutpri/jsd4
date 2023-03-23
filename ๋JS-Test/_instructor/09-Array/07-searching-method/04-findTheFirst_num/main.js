const nums = [7, 9, -5, -1, 0, 3];

let result = nums.find(function(item,index,arr) {
    // if(item < 0) {
    //     return true
    // }
    return item < 0
})

console.log(result)