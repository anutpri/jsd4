
// ################################ Number  
// ## Arithmatic
 
// 3+7 // 10
// 5-2 // 3
// 5*7 // 35
// 5**2 // 25
// 40/10 // 4

// ## Remainder , Modulo 
// 16%3 // remainder == 1
//-16%3 // 3(-5)- 1 ==> remainder == -1
// 3(-6) + 2 ==> modulo == 2


// ## Precedence
// 15 + 4 * 5
// (15+4) * 5
//50 - 12 / 2 + 6 * 4 // 50 - 6 + 24 ==> 50 + 18 ==> 68

// ## Value 
// Int 5,10,203,-769
// Float 5.2, 0.9
// Infinity
// NaN ==> Not A Number

// 1/0

// 0.2**3



// ######## LIMIT FLOAT

// Number.MAX_VALUE // 1.7... * 10^308
// Number.MIN_VALUE // 5/(10^-324)

// Number.MAX_VALUE  + 0.0000000000000001e308
// -Number.MAX_VALUE  - 0.0000000000000001e308 

// 5e-324 - 3e-324


// ######## LIMIT INT

// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER

// Number.MAX_SAFE_INTEGER + 1  === Number.MAX_SAFE_INTEGER + 2

// ## INFINITY
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity

// ## NOT A NUMBER
Number.NaN // NaN

// ################ STRING
// 'C'
// "C"
// `C`

// 'CodeCamp'
// "CodeCamp"
// `CodeCamp`

//'CodeCamp' + ' ' + "Thailand" + "_" + `12` // "CodeCamp Thailand_12"
//"CodeCamp" + 12 // "CodeCamp12"
//"CodeCamp" + NaN // "CodeCampNaN"


// ##### TYPEOF
//typeof 5 // call like unary operator
//typeof NaN
//typeof "CC"
//typeof(5) // call like function


// `CodeCamp ${17-5}`
// "CodeCamp ${17-5}"
// 'CodeCamp ${17-5}'
// "C"+"O"+"D"+"E"


// ### ESCAPE CHARACTER

// "Codecamp" + "\t" + "12" // Codecamp 12
// "Codecamp" + "\v" + "12" // Codecamp 12
// "Codecamp" + "\f" + "12" // Codecamp 12
// "Codecamp" + "\n" + "12"




// ISSUE
// console.log("This is awesome "qoute"")

// Solution
// console.log('This is awesome "qoute"')
// console.log(`This is awesome "qoute"`)
// console.log("This is awesome \"qoute\"")
 // console.log("How to print backslash \\")