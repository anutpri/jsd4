function getPerson(firstName, lastName, ...hobbies) {
  return {
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length
  };
}

const getPerson = (firstName, lastName, ...hobbies) => ({
  firstName,
  lastName,
  hobbies,
  numHobbies: hobbies.length
});
