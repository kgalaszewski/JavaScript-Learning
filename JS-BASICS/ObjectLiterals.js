// tworzenie jsonowego obiektu, to nie to samo co klasy, tak naprawde to jest dict jsonowy
const person = {
    firstName: 'John',
    lastName: 'test' 
}

console.log(person)
console.log(person['firstName'])
console.log(person.firstName)

// you can add property to an literal object at any time
person.newOne = 3;
console.log(person.newOne);