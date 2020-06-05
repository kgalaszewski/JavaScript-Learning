const person = {
    firstName: 'John',
    lastName: 'test'
}

// notice that here it has to have the same exact names, because its just unpacking values from dict, not like in pythosn
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);