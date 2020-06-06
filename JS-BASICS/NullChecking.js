let x;

if (x) {
    console.log('doesnt work'); // does not print
}

if(!x) {
    console.log('works');
}


function someFunc(value, callbackFunkcjaaaa) {
    if (callbackFunkcjaaaa) {
        callbackFunkcjaaaa(value);
    }
}

someFunc(2); // nothing happens
someFunc(2, (x) => {
    console.log(x*x);
}); // 4
