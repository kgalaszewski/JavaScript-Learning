const x = 10;

// == checks if x matches the value, not the datatype
if (x == 10) {
    console.log(`x is ${x}`); // goes there
}


// === matches both value and datatype, so its always better to use that
const y = '10';
if (y == 10){
    console.log('value is the same'); // goes there
}
if (y === 10){
    console.log('value is the same and datatype as well'); // DOES NOT GO THERE
}
else{
    console.log('datatype is not the same'); // goes there
}

// ternary the same as in c#
console.log(3 == '3' ? 'okejka' : 'nie okejka'); // okejka