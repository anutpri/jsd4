// n!
// 4! =  1 * 2 * 3 * 4 = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

const calFactorial = (num) =>  {
    let result = 1

    for (let i = 1; i <= num ; i++){
        result *= i
    }
    return result
}

console.log(calFactorial(5))