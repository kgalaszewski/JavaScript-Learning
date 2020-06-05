// don't use var, not the best practise in ES6

let name;

// undefined is default value for uninitialized variable
console.log(name);

let name2 = 'Karol';
// now it will print Karol
console.log(name2);

// variables as in other languages can not store reserved words inside the name
// if, let etc.

// camel case like in C#
let firstName = 'lelele';


// CONST VARIABLES
const someConstVariable = 3;
// someConstVariable = 4; // throws TypeError


// DYNAMIC TYPING
let siemanko = 'siemanko';
console.log(typeof(siemanko)); // string

siemanko = 4;
console.log(typeof(siemanko)); // number

siemanko = false;
console.log(typeof(siemanko)); // boolean

console.log(typeof (siemanko) === 'string') // false
console.log(typeof (siemanko) === 'boolean') // true

