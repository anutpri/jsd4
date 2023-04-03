// Demo Callback # 1

// Parameter : Input == number,string,boolean,null,undefiened
// Parameter : Input == function

// function myFunc (a,b,callBack) {
//     // callBack(`${a},${b}`)
//     return a*b
// }

// // myFunc(3,4,console.log)
// // myFunc(3,4,alert)

// function myLog(text) {
//     console.log(`Log from my Custom Callback ${text}`)
// }

// myFunc(3,4,myLog)

// Demo CallBack # 2

// confirm("Are you ready ?")

// Main Function
// function ask(question, yesFunc, noFunc) {
//     let response = confirm(question);
//     if (response) {
//         // yesFunc === showOk
//         yesFunc() // yesFunc() === showOk()
//     } else{ 
//         // noFunc === showCancle
//         noFunc() // noFunc() === showCancle()
//     }
//   }
// // CallBack : YES 

//   function showOk() {
//     alert('You agreed.');
//     return
//   }

// // Callback : No
//   function showCancel() {
//     alert('You canceled the execution.');
//   }

//   // functions showOk, showCancel are passed as arguments to ask
//   ask('Do you agree?', showOk, showCancel);
// ask("Do you agree ?", ()=> alert("Agree"),function () { alert("Cancel")})


// # 1 

function checkPermission (role,cb1,cb2) {

    if (role === 'ADMIN') {
        cb1();
    } else {
        cb2()
    }
}


// CallBack When Admin
let adMinExecute = function () {
    alert("ACCESS GRANTED")
}

// CallBack When Guest
let guestExecute = () => alert("ACCESS DENIED")

checkPermission("ADMININWZA",adMinExecute,guestExecute)