
function makeRandomNumberInRange (min,max) {

    let diff = Math.random() * (max - min)  // 7
    return (min + diff).toFixed(2) 
}


console.log(makeRandomNumberInRange(2,9)) //min:2 max:9(exclusive)