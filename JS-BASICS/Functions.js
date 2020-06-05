function greet(name, lastName) // at the time of declaration its parameter
{
    console.log('Hello World');
    console.log(`Hello ${name} ${lastName}`);
    return true;
}

let result = greet('Karol', 'LastNameovsky'); // at the time of passing its called argument, same as in C#
// if you don't pass an argument to the function,
// it does not throw an error, value is undefined

console.log(result);
