
//Loop for
// for (let i = 0; i <= 5; i++){
//   console.log('hhh'+i);
// }


//Loop by array index
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
    console.log('I would love to visit '+ vacationSpots[i]);
}


//Nested Loops for check duplicated items in both array and .push to mutalFollowers
// const bobsFollowers = ['Jor ', 'Jim ', 'Jan ', 'June'];
// const tinasFollowers = ['Jor ', 'Jim ', 'Bee'];
// let mutualFollowers  = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//          mutualFollowers.push(bobsFollowers[i]); 
         
//     }
//   }
// }
// console.log(mutualFollowers)


//while check condition first if true then do loop 
//while Loop when cureentCard !== spade  (stop loop when found spade)
// const cards = ['diamond', 'spade', 'heart', 'club'];

// let currentCard
// while (currentCard !== 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }


//Do while (do first and then check condition)
// let cupsOfSugarNeeded = 3;
// let cupsAdded = 0;

// do {
//  cupsAdded++
//  console.log(cupsAdded + ' cup was added') 
// } while (cupsAdded < cupsOfSugarNeeded);