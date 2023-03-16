
// .forEach select all item in array start form index 0 by use callback function inside ()
//is used to execute the same code on every element in an array 
//but does not change the array and returns undefined.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log('I want to eat a '+fruits));



//.map compute all item in array start form index 0 by use callback function inside () then return in new array
//executes the same code on every element in an array and returns a new array with the updated elements.
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number + 1;
});

console.log(squareNumbers);


//.filter check all item that match condition start form index 0 by use callback function inside ()
//checks every element in an array to see if it meets certain criteria and returns a new array 
//with the elements that return truthy for the criteria.
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
  });
  
  console.log(onlyNumbers);


// .join insert string or num between item in array (affect all item)
const arr = ['The', 'quick', 'brown', 'fox'];
const separator = ' ';

const joinedStr = arr.join(separator);

console.log(joinedStr); // Output: "The quick brown fox"


//.findIndex find index that match condition then return index number, start from index 0(stop when found) by use callback function inside ()
//returns the index of the first element of an array that satisfies a condition in the callback function. 
//It returns -1 if none of the elements in the array satisfies the condition.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
  return animals === 'elephant'; //return 7
})

console.log(foundAnimal);

const startsWithS = animals.findIndex(animals => {
  return animals[0] === 's'; // animals[0] = animals[each animal item[0(first letter)]] then return 3 and stop
})

console.log(startsWithS);


//.some find some item that match condition start form index 0 and return true or false
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
    //check word.length < 6 
  return word.length < 6; //return true because 'pique' and 'guise' < 6
}));



//.every check all item pass condition start form index 0 and return true or false
const arr1 = [2, 4, 6, 8, 10];

const allEven = arr1.every((currentValue) => {
  return currentValue % 2 === 0;
});

console.log(allEven); // Output: true


//.reduce iterates through an array and takes the values of the elements and returns a single value.
const arr2 = [1, 2, 3, 4, 5];

const sum = arr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15