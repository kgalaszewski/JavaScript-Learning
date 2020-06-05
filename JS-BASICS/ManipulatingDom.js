// info about window
console.log(window);
// all the inbuilt  functions like alert and close work on window so thats why you don't need
// to write something like this : window.alert()


// get single element - old version
let form = document.getElementById('my-form');
let form2 = document.getElementsByClassName('some-class');
// there are more methods like that
console.log(form);


// newer version
// this one selects first single one
let something = document.querySelector('#users'); // # defines an ID
let something2 = document.querySelector('.container'); // . defines that its a class
console.log(something);
console.log(something2);

// select many
let someElements = document.querySelectorAll('.item');
console.log(someElements);

// some inbuilt dom methods for elements
someElements.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.innerHTML);
})