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