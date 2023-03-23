

function fixedDecimal (num) {

    // return num.toFixed(2)

    return (Math.floor(num * 100)  / 100).toFixed(2)
}

console.log(fixedDecimal(3.1289))
console.log(fixedDecimal(10))


// percent : 0-100 (77)
// fraction : 0-1  (0.77) 