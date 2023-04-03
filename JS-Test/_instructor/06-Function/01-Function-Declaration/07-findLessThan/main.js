function min(a,b) {

    // #1
    // if(a < b) {
    //     return a;
    // } else {
    //     return b
    // }

    // #3
    // if(a < b) {
    //     return a;
    // }

    // return b

    return a < b ? a : b
}

let result = min(99,5)
alert(result)