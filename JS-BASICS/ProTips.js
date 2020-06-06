// ##### 1. Debugging
// Do this instead of logging object like that : console.log(object1);
// Doing that you have much better info about the object and names of fields, properties
console.log({ object1 });
console.log({ object1, object2, object3 });


// ##### 2. Using CSS for debug purpose - works only in browser
console.log('%c SomeText', 'color: orange; font-weight: bold;'); // colored text displayed


// ##### 3. displaying array as a table (like in excel)
let array123 = [1,2,3,4, {a: 'a'}, {a:'a', b:'b'}];
console.table(array123);


// ##### 4. timer
console.time('nazwaTimera');
// do some stuff
array123.forEach(x => {
    console.log(x);
})
console.timeEnd('nazwaTimera');


// ##### 5. Stack Trace Logs
// lets imagine we would like to know, where the method that is failing was exactly invoked
function someNotWorkingFunc() {
    // do some stuff that throws an error
    console.trace('Here I am, Rock you like a hurricane'); // It prints the stack trace like in C# in callstack window
}
someNotWorkingFunc();
// at something 123, 123123
// at 1asda12.31.23.
// at some file line 123123

// ##### 6. Destructuring inside the function parameter
// Instead of doing function feedDog(dog) {} ... Do this
function feedDog({name, age, breed}) {
    // now you can use name, age, breed just like that
    // instead of invoking dog.name, dog.age
}
// if you have more than one object to get as a parameter, its better to do something like this
function feedAnimals(cat, dog) {
    let { catName, catAge } = cat;
    let { dogName, dogAge } = dog;
}
 

// ##### 7. Object merging
// by combining 2 objects, if they have the same names of properties, the right one will replace the first objects properties
// in this case, age will be overriden by dogOwner
let dog = {
    dogName: 'Kodi',
    age: 5
}
let dogOwner = {
    name: 'Karol',
    age: 25
}
let combined = {...dog, ...dogOwner};
console.log(combined); // { dogName: 'Kodi', age: 25, name: 'Karol' }

// the same works for arrays
// but in case of arrays, it does not override any values
let array1 = [1,2,3];
let array2 = [2, 3, 4, 5];
console.log([...array1, ...array2]); // [1, 2, 3, 2, 3, 4, 5]
console.log([123, 'asd', ...array1, 'dsa']); // [ 123, 'asd', 1, 2, 3, 'dsa' ]


// ##### 8. Async lambdas
// really similar to C#
let result = async() => {
    // something = await for something
    // something2 = await for something2
    // something3 = await for something3
    // do something with 3 results
    console.log('done');
}