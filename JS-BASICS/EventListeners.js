let przycisk = document.querySelector('.btn');

przycisk.addEventListener('click', (eventValueLalala) => {
    alert('Klikniete zostalo sie');
});

// dobra praktyka jest uzywac e zamaist randomowych nazw
przycisk.addEventListener('click', (e) => {
    e.preventDefault(); // stops from submitting form on click
    alert('Klikniete zostalo sie');
});


// mozna tez oczywiscie gotowe funkcje
function fun1(e) {
    console.log('here i am');
}

przycisk.addEventListener('click', fun1);



