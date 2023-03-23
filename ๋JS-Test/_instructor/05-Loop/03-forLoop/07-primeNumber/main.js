
// Every Number can divide by 1 and it self

//  29   1 <===== 2, ...., 28  =====> 29
// 25    1 <======2,.., 5,... 24 ===> 25

// Control ตััวเศษ
for (let i = 2 ; i <= 100 ; i++){

    let isPrime = true;


    // Control ตัวส่วน
    // for(let j = 2; j < i ; j++) {
    for(let j = 2; j < Math.sqrt(i) ; j++) {

        // Check หารลงตัว 
        if (i%j === 0) {
            isPrime = false
            break;
        }

    }

    if(isPrime){
        console.log(i)
    }


   
}

