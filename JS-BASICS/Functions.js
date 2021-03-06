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


// lambdas are exactly the same as in C#
fun1 = (x) => x*x;
fun2 = (x, y, z) => x*y*z;
console.log(fun1(2));
console.log(fun2(1,2,3));


// you don't need to use bracket for lambda ufnc
fun3 = x => x*x;
console.log(fun3(2));


// args
function fun4(args) {
    if (args) {
        console.log(args);
    }
}

fun4({a: 123, b: '12313'});