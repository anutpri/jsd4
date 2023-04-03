// check PrimeNumber

function checkPrime(num){
    let isPrime = true

    // loop ตัวหาร
    for(let i = 2; i < num; i++){

        if(num % i === 0) {
            isPrime = false
            break;
        }
    }

    return isPrime
}

//console.log(checkPrime(7)) // isPrime == true
//console.log(checkPrime(20)) // isPrime == false


function printPrime(limit){
    for(let i  = 2; i <= limit; i++){
       let isPrime =  checkPrime(i)

       if(isPrime) {
            console.log(i)
       }

    }
}

printPrime(500)