// Primitive / Value Types


let name = 'Karol'; // String
let age = 25; // Number
let isApproved = true; // Boolean
let firstName; // undefined
let lastName = null; // null
console.log(firstName)
console.log(lastName)


// Reference Types

// objects  represented by json format
let person = {
    name: 'asdasdasd',
    something: 2
};

console.log(person);
console.log(person.name);
person.name = 'new name';
console.log(person.name);

let thatsTheSame = person.name === person['name']; // true
console.log(thatsTheSame);

// arrays - dynamically typed !!! [ 'blue', 'da boo dee', 'da boo daa', 1, 2 ]
let someValues = [];
let colors = ['blue', 'da boo dee', 'da boo daa', 1 , 2];
console.log(someValues); // []
console.log(colors); // [ 'blue', 'da boo dee', 'da boo daa', 1, 2 ]
console.log(colors[0]); // blue
colors[0] = 'bluee';
console.log(colors[0]); // bluee
colors.push([1, 2]);
console.log(colors); // [ 'bluee', 'da boo dee', 'da boo daa', 1, 2, [ 1, 2 ] ]
