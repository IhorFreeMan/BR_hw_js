'use strict';

// Напиши всі можливі варіанти створення функцій.
// 1. Function Declaration
function firstFunction() {
    console.log('Перша декларативна функція');
}
// firstFunction() 

// 2. Function Expression
const secondFunction = function () {
    return 'Друга функція вираження';
}

// console.log(secondFunction());

// 3. Arrow Function
const thirdFunction = () => {
    return 'Третя. Стрілочна функція';
}

// console.log(thirdFunction());

// 4. Anonymous Function
// setTimeout(function() {
//     alert('Четверта. Анонімна функція');
// }, 5000);



// 5. Immediately Invoked Function Expression (IIFE)
// (function() {
//     alert('П\'ята. Функція, що виконується одразу');
// })();



// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArguments() {
    return arguments.length;
}
// console.log(countArguments(1, 2, 3, 4, 5)); // 5 


// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function chuseNumber(num1, num2) {
    if (num1 < num2) {
        return -1;
    }
    if (num1 > num2) {
        return 1;
    }
    if (num1 === num2) {
        return 0;
    }
}

// console.log(chuseNumber(5, 10)); // -1
// console.log(chuseNumber(10, 5)); // 1
// console.log(chuseNumber(5, 5)); // 0

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    if (n > 1) {
        let result = 1;
        let i = 1;
        while (i <= 10) {
            result *= i; 
            i++;
        }
        return result;
    }
    else {
        return 'Введено невірне число';
    }

}

// console.log(factorial(10))


// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function combineNumbers(a, b, c) {
    return Number('' + a + b + c);
}
// console.log(combineNumbers(1, 4, 9)); // 149     

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;
    } else {
        return length * width;
    }
}
// console.log(calculateArea(5)); // 25
// console.log(calculateArea(5, 10)); // 50

// Напиши функцію, яка перевіряє, чи є передане їй число простим. Просте число - це число, більше 1, яке ділиться тільки на 1 і на себе.
function isSimpl(num) {
    if (num <= 1) {
        return false;
    }
    // Math.sqrt(num) — це вбудована функція в JavaScript, яка обчислює квадратний корінь із заданого числа
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isSimpl(7)); // true
console.log(isSimpl(10)); // false