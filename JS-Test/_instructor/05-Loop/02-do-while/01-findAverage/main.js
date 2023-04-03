function isNum(input){
    return !(input === null || input.trim() === '' || input == 0 || isNaN(input))
}


let input;
let sum = 0;
let count = 0;

do {
    input = prompt("Enter Number")
    if(isNum(input)){
        sum += +input;
        count++;
    }

} while (isNum(input))

if(count> 0) {
    console.log(sum)
console.log(sum/count)
}

