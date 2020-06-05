// deprecated method - don't use that
function Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

Person.prototype.fun1 = function(x, y){
    console.log('elo');
}

let obj1 = new Person('Karol', 25);
obj1.fun1(1, 2); // prints elo


// modern way of creating classes in JS - use only this way
class Person2{
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    fun1(value) {
        console.log(value);
        console.log(this.firstName);
        console.log(this.age);
    }
}

let obj2 = new Person2('Kerol', 25);
obj2.fun1('someVal');

// it really works exactly the same as deprecated function object creating, but it just looks better, take a look
Person2.prototype.nowaFunkcja = function(x) {
    console.log(x);
}
obj2.nowaFunkcja('x');

// IN TYPESCRIPT you can use public, private, parameter: type etc.
// IN TYPESCRIPT you can use public, private, parameter: type etc.
// IN TYPESCRIPT you can use public, private, parameter: type etc.
// IN TYPESCRIPT you can use public, private, parameter: type etc.
// IN TYPESCRIPT you can use public, private, parameter: type etc.
// IN TYPESCRIPT you can use public, private, parameter: type etc.