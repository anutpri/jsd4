// function hello(){

//     alert("Hello World!"); 
//     console.log(document.getElementById("demo").innerHTML = "The button has been clicked");
// }

// let string1 = "Hello World!";
// console.log(string1);

// let fristName = "Anut";
// let lastName = "pringkasamchai";
// let fullName = fristName + ' ' + lastName;
// console.log(fullName);

// let info = fristName + ' ' + lastName;
// console.log(info);

// let email = 'anut.pri@gmail.com';
// let check = email.includes('@');
// console.log(check);

// let radius = 10;
// const pi = 3.14;


// let un;
// console.log(un);

// let null1 = null;
// console.log(null1);

// let selectfruit = ['apple', 'banana', 'orange'];

// selectfruit[3] = 'coconut';
// selectfruit[1] = 'pineapple';
// console.log(selectfruit);
// console.log(selectfruit.length);

// let user = {
//     fristName: 'Anut', 
//     lastName: 'Pringkasamchai',
//     phoneNum: "088-888-8888",
//     email: 'anut.pri@gmail.com',
//     skill:['html', 'css', 'js'],

// }

// user.phoneNum = '088-888-9999';
// user.skill.push('sql');
// console.log(user);
// console.log(user.fristName,user.lastName);
// console.log(user.skill);
// console.log(user.skill[3]);



// const password = '1234';

// password.length >= 12 ? console.log('Password is very strong') :
// (password.length >= 8 ? console.log('WELCOME'): console.log('Sorry the password is too short') );

// const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };
 // const plantNeedsWater = day => day === 'Wednesday' ? true : false;
//   console.log(plantNeedsWater('Wednesday'));



//   const info = (name) => {
//     console.log("Hello " + name);
//   }

//   info('Jack');

//   const addnumber = (a,b) => {
//     return a + b;
//   }

//   console.log(addnumber(5,3));


  // const myFunction = (a,b) => a*b;

  // let x = myFunction(5,3);
  // let y = x;

  // console.log(x);




  // function monitorCount(rows, columns) {
  //   return rows * columns;
  // }
  
  // function costOfMonitors(rows, columns) {
  //   return monitorCount(rows, columns) * 200
  // }
  
  // const totalCost = costOfMonitors(5, 4);
  // console.log(totalCost);

  // const totalCost = (rows, columns, costOfMonitors) => (rows*columns) * costOfMonitors;

  // console.log(totalCost(5,4,200));
    
  // const arr = ['a','b','c','d','e','f','g']

  // arr.splice(1,5,'l');

  // console.log(arr);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combine = [...arr1,...arr2];
// console.log(combine);

//findtotalof item = 2
// const arr = [1, 2, 3, 2, 4, 2, 5];
// const count = arr.filter(num => num === 2).length;
// console.log(count);



//code Inw Touch findallindexnumber that match condition
// const number = [1,2,3,1,1,7,8,9,1];

// const findAllIndex = (arr, value) => {
//   let temp = [];
//   arr.forEach((e,i) => {
//   if (e === value) {
//     temp.push(i)
//     }
//   })
//   return temp
// }

// console.log(findAllIndex(number, 1));


// const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
// let count = {}; //create empty object to keep track the count
// letters.forEach(item =>{
//     if (count[item]){ //check if we have an letter in
//         count[item]++;
//     }else{
//         count[item] = 1;
//     }
// });
// console.log(count);


// const arr2 = [1, 2, 3, 4, 5];

// const sum = arr2.reduce((a, c) => {
//   return a + c;
// });

// console.log(sum);