// 1.
// destructuring objects
// be aware that names must be equal
let foo = {
    first: 'firstsss',
    second: 'secondsss',
    third: 'thirdssss'
}

let { first, third } = foo;
console.log(first);
console.log(third);


// 2. 
// destructuring arrays
let someArray = [1, 2, 3];
let [x, y] = someArray;
console.log(x);
console.log(y);


// 3.
// new way of adding items to dicts / literal objects
let name = 'Karol';
let age = 25;
let person = {
    name,
    age
}
console.log(person);


// 4.
// Template strings
let name2 = 'Karol';
let example = `My name is ${name2}`;
console.log(example);

// it works multi-line
let exampleText = `My name
is ${name2} and
lalala
because
yes`;
console.log(exampleText);