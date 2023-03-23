// username === ''  ==> username is required
// password === ''  ==> password is required


// username === 'admin' && password === '1234'  ==> Hello, admin
// username === 'john' && password === 'qwerty' ==> Hello, john
// else ==> invalid username or password

let username = prompt("Enter username") 
let password = prompt("Enter password")

if(username === null || username.trim() === ''){
    // ไม่ใส่ username
    alert('username is required')
    if(password === null || password.trim()=== ''){
        alert('password is required')
    }

} else if(password === null || password.trim() === ''){
    // ใส่ username แต่ ไม่ใส่ password
    alert('password is required')

} else {
    // ใส่ทั้ง username และ password
    if( (username === 'admin' && password === '1234') || (username === 'john' && password === 'qwerty')){
        alert(`Hello, ${username}`)
    } else {
        alert("invalid username or password")
    }
}