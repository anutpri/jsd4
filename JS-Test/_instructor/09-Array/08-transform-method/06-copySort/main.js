let arr = ['React', 'Vue', 'Angular'];

function copySorted(array) {

    const clone = array.slice()
    return clone.sort()
}

copySorted(arr) //?