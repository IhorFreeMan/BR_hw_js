'use strict';

let arrFoods_2 = [
    {
        name: 'bread',
        amount: 2,
        isBought: false
    },
    {
        name: 'milk',
        amount: 3,
        isBought: true
    },
    {
        name: 'beer',
        amount: 2,
        isBought: false
    }
]
// 1   Метод передору елементів масиву forEach ------------------
const blockAmount = document.getElementById('amount');
arrFoods_2.forEach(function(item) {
    let nameFoodUpper = item.name.toUpperCase();
    let namefoodLength = item.name.length;
    blockAmount.innerHTML += `<p>${nameFoodUpper} - складається з ${namefoodLength} літер</p>`
})

// console.log(arrFoods_2);


// Методи долдавання і видалення ---------------

// 1. POP, PUSH  (stack)----------------

let arrNumb = [1,2,3,4,5];
// console.log(arrNumb);
// let newNumb = 10;

// arrNumb.push(newNumb);
// console.log(arrNumb);


// let newArrPopNumb = arrNumb.pop();
// console.log(arrNumb);
// console.log(newArrPopNumb);


// 2. Shift, Unshift (черга) ----------------

let newArrNumb_2 = arrNumb.shift();
console.log(newArrNumb_2);
console.log(arrNumb);

arrNumb.unshift(100);


// ----------- Splice, Slice -----------
// 1. Splice (додає, видаляє, заміняє)---- 


let strWords = 'I like Beetroot every day';
let arrWords = strWords.split(' ');

arrWords.splice(0, 1, 'Danija');
// arrWords.splice(2);

console.log(arrWords);

// 2 Slice ----------------------
// arr.slice(start, end);


let studentName = 'Ihor';
let letterStudentName = studentName.split('');

console.log(letterStudentName);
let newLetters = letterStudentName.slice(0,2);
console.log(newLetters);


// ------------ Варіантии зробити масив порожнім --------

// 1 arrStrWords = [];
// 2 arrStrWords.splice(0);
// 3 arrStrWords.length = 0;

// console.log(arrStrWords);
