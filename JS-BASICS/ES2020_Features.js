// all the examples below will display info about the current web window
// but some of them work for diffrent environments
console.log(window);
console.log(self);
console.log(frames);
console.log(this);

// 1.
// global this - it works everywhere, you no longer need to use one of these presented above
console.log(globalThis);

// 2.
// Promise.allSettled
// Promise.all - works when all of the promises in array are resolved
// Promise.allSettled - works for all even if some are rejected, or all of them are rejected


// 3.
// Operator that works exactly as ?? in C#
let name = 'nameeee';
let age;
console.log(name || 'name not found'); // nameeee
console.log(age || 123); // 123


// 4.
// Optional chaining operator, the same as ?. in C#
class Testowa {
    constructor() {
        this.name = 'nameee';
        this.age;
    }
}

let obj = new Testowa();
console.log(obj?.name); // nameee
console.log(obj?.age); // nothing happens
console.log(obj.age); // undefined


// 5.
// BigInt
// Javascript default integer type, which is number, has its limits
let defaultMax = Number.MAX_SAFE_INTEGER;
console.log(defaultMax); // Limit is 9007199254740991
let whatAmI = defaultMax + 1; 
console.log(typeof whatAmI); // it is still a number, despite being overmaxed, so its not safe to use
// we should use BigInt instead, because Number is unpredictable
console.log(whatAmI + 1); // 9007199254740992
console.log(whatAmI + 2); // 9007199254740994
console.log(whatAmI + 3); // 9007199254740996
// example above shows that it is not safe, look at the values printed
// BigInt example
let bigIntValue = 113123123123123123123123123n;
console.log(bigIntValue); // 113123123123123123123123123n
console.log(bigIntValue + 500n); // 113123123123123123123123623n
// you have to add Nn to Nn, not normal number
// and now BigInt are safe, they always display good results
console.log(bigIntValue + 5); // throws TypeError, cannot mix Bigint with other types





