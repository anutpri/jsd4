const values = [1, 4, 8, 2, 1, 3, 3, 8];
//console.log(unique(values)); // [1, 4, 8, 2, 3]


function unique(array) {

    const mySet = new Set(array)
    console.log(mySet)
    const newArray = Array.from(mySet)

    return newArray
}

unique(values) //? 