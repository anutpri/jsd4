

let number = +prompt("EnterNumber")
let count = 0;

// Counter = 0
// 4596 
// 459 ==> count = 1 // (4596 - 6)/10 == 4590/10 === 459
// 45 ==> count = 2 // (459 - 9)/10 == 450/10 === 45
// 4 ==> count = 3  // (45-5)/10 == 40/10 == 4
// 0 ==> count = 4  // (4-4)/10 == 0



while(number){
    let remainder = number % 10 // 6
    number = (number - remainder) / 10 // 459
    count++;
}
alert(count);