// REST PARAMETER (...)
// const sumUnlimitParams = (...numbers) => {
//   console.log(numbers);
//   console.log(numbers[0]);
//   return numbers.reduce((acc, item) => acc + item, 0);
// };
// sumUnlimitParams(2, 5, 7, 8); // numbers => [2, 5, 7, 8]

// const students = ['Bas', 'Dream', 'Wave', 'Ohm'];
// const newStudents = students.slice(0);
// newStudents.splice(2, 0, 'Tawan', 'Game');
// const genPerson = (firstName, lastName, ...hobbies) => {};

// genPerson('John', 'Doe', 'Sport', 'Music'); // firstName => 'John', lastName => 'Doe'
// hobbies => ['Sport', 'Music']

// A rest parameter must be last in a parameter list
// const genPerson1 = ( firstName,...hobbies, lastName ) => {}; // Error
