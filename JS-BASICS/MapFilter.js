// Mapping values, the same as in python, works similar to foreach
let nowaLista = ['asd', 3, 4, 'b'];

function changeValue(value){
    return 'HEHE';
}

let nowaListaChanged = nowaLista.map(changeValue);

console.log(nowaListaChanged); // [ 'HEHE', 'HEHE', 'HEHE', 'HEHE' ]


// Filtering to jak Where w Linq w C#
let jakasLista = [1,2,3,4,5];

function checkIfValueGreaterThanTwo(value){
    return value > 2;
}

let nowaJakasLista = jakasLista.filter(checkIfValueGreaterThanTwo);
console.log(nowaJakasLista); // [ 3, 4, 5 ]


// Mozna deklarowac nowa funkcje wewnatrz, zamiast przekazywac lambdy
let cos = [1,2];

let cos2 = cos.map(function nowa(value){
    return value * value;
});

console.log(cos2);