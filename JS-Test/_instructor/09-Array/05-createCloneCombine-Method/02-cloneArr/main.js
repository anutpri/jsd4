
// ## 2

const original = ["A","2","Z"]

// const newArr = original.slice()

function clone(arr) {
    // return arr.slice()
    return [...arr]
}

const newArr = clone(original)

console.log(newArr)