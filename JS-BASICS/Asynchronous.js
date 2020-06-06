// The diffrence between JS and other OOP languages like C# is that JS is async by default
// and setTimeout method etc. are not awaited by default, which is the opposite of C#

function someFunction() {
    let something = 'NOPE';
    setTimeout(() => {
        // dont do anything
    }, 1500);
    something = 'TOO OF COURSE';
    return something;
}

async function doSomething() {
    let result = await someFunction();

    setTimeout(() => {
        document.body.innerHTML = `<h2>IT WORKS ${result}</h2>`;
    }, 1000);
}

// Main diffrence comparing to the C# expect that in JS everything is async by default, is that 
// in JS you dont await the async method outside of the method bodies
doSomething();


// Fetches
async function fetchSomething() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await result.json();

    return data;
}

setTimeout(() => {
    let result = fetchSomething(); // can't be awaited like this as well
    document.body.innerHTML = result;
}, 5000);
