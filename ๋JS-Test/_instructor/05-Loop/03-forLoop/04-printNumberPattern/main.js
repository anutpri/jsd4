// PRINT * 4 


// let result = "";
// for(let i = 0; i < 4; i++){
//     // console.log(i)
//     result += "* "  // "" + "* " ==> "*"
//     console.log(result.trim())
// }


// PRINT * 1

let result = ""

for(let i = 0; i < 8; i++){
    // i = 0
    // i  = 1  // j = 0 , j = 1
    // i = 2   // j = 0 , j = 1 , j = 2
    for(let j = 0; j <= i; j ++) {
    // i = 0 => j = 0 , j = 1 ,j = 2 ,j = 3
    
    // if(j<=i) {
    //     result += "* "
    // }
      result += `${j+1} `
        
    }

    result = result.trim() + "\n"

    // result += "*"
    // result += "\n"
}

console.log(result)


