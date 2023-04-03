let user = {
    name: 'John',
    age: 30
  };
  
  // let newUser = {...user}
  console.log(newUser)
  
  // # 1
  //let clone = {}; // the new empty object
  // let's copy all user properties into it
  
  
  // for (let key in user) {
  //   clone[key] = user[key];
  // }	
  
  // console.log(clone === user)
  
  // # 2.1 Clone - 1 src
  // const clone = Object.assign({},user) // return ==>object ที่โคลนแล้ว
  // console.log(clone)
  
  
  // // # 2.2 Clone - multiple src
  // let permissions1 = { canView: true };
  // let permissions2 = { canEdit: true,name :"Matt" };
  // let user = {name: 'John'};
  // // copies all properties from permissions1 and permissions2 into user
  // const result = Object.assign(user, permissions1, permissions2);
  
  // console.log(result)
  // console.log(user === result)
  // now user = { name: "John", canView: true, canEdit: true }
  
  
  