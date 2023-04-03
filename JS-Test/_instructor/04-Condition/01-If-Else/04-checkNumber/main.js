let num = prompt("Enter Number")

// #1 Check Type ? number or another 
// #2 other ==> PRINT INVALID
// #3 number ==> Check zero,positive,negative ==> PRINT RESULT

// #1 Check Type
//  num === null
//  num ===  ''
// num.trim() === '' 
// isNaN(num)

// if (num === null || num ===  '' || num.trim() === '' || isNaN(num)){
//     alert("Invalid Number")
// } else {

//     if (num > 0) {
//         alert("Positive Number")
//     } else if (+num === 0) {
//         alert("Zero")
//     } else {
//         alert("Negative number")
//     }
// }

if (num === null || num ===  '' || num.trim() === '' || isNaN(num)){
    alert("Invalid Number")
} else if(num>0) {
    alert("Positive Number")
  
} else if (num == 0) {
    alert("Zero")
} else {
    alert("Negative number")
}