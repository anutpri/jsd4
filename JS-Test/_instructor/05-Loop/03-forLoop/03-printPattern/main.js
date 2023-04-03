// PRINT * 4 


// let result = "";
// for(let i = 0; i < 4; i++){
//     // console.log(i)
//     result += "* "  // "" + "* " ==> "*"
//     console.log(result.trim())
// }


// PRINT * 1

let result = ""

for(let i = 0; i < 4; i++){
    // i = 0
    for(let j = 0; j <= i; j ++) {
    // i = 0 => j = 0 , j = 1 ,j = 2 ,j = 3
    
    // if(j<=i) {
    //     result += "* "
    // }
      result += "* "
        
    }

    result = result.trim() + "\n"

    // result += "*"
    // result += "\n"
}

console.log(result)