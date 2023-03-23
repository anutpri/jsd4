let menu = { width: 200, height: 300,title: 'My menu' ,isSquare : true}
// after call function multiplyNumeric(menu, 3)
// menu = { width: 600, height: 900,title: 'My menu'};


// INPUT : object , number
// OUTPUT : object (modified only number by multiply)

/*
CHECK each key with value FOR every key
   IF value type number 
      UPDATE value by multiply for that key 
   ELSE 
      dont update == stay the same
RETURN modified object
*/

const multiplyNumeric = (obj,num) => {
  const result = {}
  for(let key in obj) {
    let currentValue = obj[key]
    // let current = 5
    //obj[key] = current

    if(typeof currentValue === 'number') {
      result[key] = currentValue*num
    } 
    // else if (typeof currentValue === 'boolean') {
    //   result[key] = !currentValue
    // }
    
    else {
      result[key] = currentValue
    }
    // result[key]  = 5           // result['width'] , result['height']
  }
  return result
}

console.log(multiplyNumeric(menu,3))

console.log(menu)



// MORE EXAMPLE ABOUT CLONING

const user = {name: "CC", age : 12, address : "502"}



// const resultObj = {}

// resultObj.name = user.name // resultObj['name'] = user['name]
// resultObj.age = user.age // resultObj['age'] = user['age']
// resultObj.address = user.address //resultObj['address'] = user['address'] 

// for(let key in user) {
//   console.log(`KEY : ${key} , VALUE : ${user[key]}`)
//   let currentkeyName = key
//   // let currentValue = user[currentkeyName]

//   // resultObj[currentkeyName] = user[currentkeyName]
//   resultObj[key] = user[key]


// }

console.log(user)
// console.log(resultObj)



function cloneObj (obj) {
  const resultObj = {}
  for(let key in obj) {
    console.log(`KEY : ${key} , VALUE : ${user[key]}`)
    let currentkeyName = key
    // let currentValue = user[currentkeyName]
  
    // resultObj[currentkeyName] = user[currentkeyName]
    resultObj[key] = user[key]
  
  }

  return resultObj
}

let result = cloneObj(user)
console.log(result)