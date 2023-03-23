
function isArray(input) {
    return Array.isArray(input)
}

// STATIC METHOD    PROTOTYPE.method
// INSTANCE METHOD  [1,2,34].method

isArray({}) //?
isArray(1)  //?
isArray("")  //?
isArray([])  //?
isArray([1,2,3,4])  //?