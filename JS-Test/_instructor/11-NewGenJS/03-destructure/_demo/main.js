const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobbies: ['Sport', 'Shopping'],
  address: {
    province: 'Bangkok',
    district: 'Pathumwan'
  },
  friends: [
    {
      firstName: 'Jim',
      lastName: 'Carry',
      phoneNumber: '0901999999'
    },
    {
      firstName: 'Jack',
      lastName: 'Ma',
      phoneNumber: '0901999998'
    }
  ]
};

// console.log('address: Pathumwan Bangkok');
// console.log(`address: ${person.address.district} ${person.address.province}`);

// const district = person.address.district;
// const province = person.address.province;
// console.log(`address: ${district} ${province}`);

// const firstName = person.firstName;
// const lastName = person.lastName;

// const { friends, firstName, lastName, age = 20 } = person;
// firstName => 'John', lastName => 'Doe', age => 20

// rename varaible to fname
// const { firstName: fname, address } = person;
// address => { province: 'Bangkok', district: 'Pathumwan'}
// adreess.province => 'Bangkok'

// const {
//   address: { province }
// } = {
//   firstName: 'John',
//   lastName: 'Doe',
//   hobbies: ['Sport', 'Shopping'],
//   address: {
//     province: 'Bangkok',
//     district: 'Pathumwan'
//   },
//   friends: [
//     {
//       firstName: 'Jim',
//       lastName: 'Carry',
//       phoneNumber: '0901999999'
//     },
//     {
//       firstName: 'Jack',
//       lastName: 'Ma',
//       phoneNumber: '0901999998'
//     }
//   ]
// };
// province => 'Bangkok'

// DESTRUCT ARRAY
// const numbers = [79, 35, 66, 48, 55, 77, 99];
// const [firstNumber, secondNumber] = numbers;
// const [, , , fourthNumber] = [79, 35, 66, 48];
// const [a, b, ...c] = numbers; // c => [66 ,48, 55, 77, 99]

// const [d = 0] = [];

// // REST with object destructuring
// const { firstName, lastName, ...otherInfo } = person;

// const {
//   friends: [{ phoneNumber: firstPhoneNumber }]
// } = person;

// const getFullname = user => {
//   // console.log(`${user.firstName} ${user.lastName}`);
//   const { firstName, lastName } = user;
//   console.log(`${firstName} ${lastName}`);
// };

// const getFullname1 = ({ firstName, lastName }) => {
//   console.log(`${firstName} ${lastName}`);
// };

// getFullname({ firstName: 'John', lastName: 'Doe' });
