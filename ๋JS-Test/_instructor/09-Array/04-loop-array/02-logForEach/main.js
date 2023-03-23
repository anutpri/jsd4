const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill


names.forEach((item,index,array)=> {
    console.log(`${index + 1}. ${item}`)
})