// Percent ==> Per Century

// 1st yr
// balance  = 100,000
// newBalance =  100,000 + interest
// newBalance =  100,000 + 100,000 * (2.5/100) == 100,000 + 2500

//  2nd yr
// balance = 102,500

let balance = 100000
for(let i = 0; i < 10; i++){

    balance = balance + balance*(2.5/100)

}

console.log(balance.toFixed(2))

