'use strict';

// -------- Type Data (Типи даних) -------

// ------- Примитіви ---------
    // 1. Number(число)
    // 2. Bigint(великі числа)
    // 3. String(строка)
    // 4. Boolean(булево значення, логічний тип)
    // 5. Null(нул)
    // 6. undefined(невизначений)
    // 7. Symbol(унікальний id проперті об'єктів)

// --------- Складні типи ---------
    // 8. Object(Об'єкт)

    // object
    // array
    //function
    // class


// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// let age = prompt('Введіть ваш вік');
// age = parseInt(age); // parseInt — це вбудована функція, головна задача якої — "дістати" ціле число з текстового рядка

// if (isNaN(age) || age < 0) {
//     alert('Помилка! Будь ласка, введіть коректне числове значення для віку.');
// }

// if (age >= 0 && age <= 11) {
//     console.log(typeof age);
//     alert ('Ви дитина');
// } else if (age >= 12 && age <= 17){
//     alert ('Ви підліток');
// } else if (age >= 18 && age <= 59){
//     alert ('Ви дорослий');
// } else if (age >= 60 && age <= 120) {
//     alert ('Ви пенсіонер');
// } else {
//     alert ('Введено невірні дані');
// }

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let yourSymbol = prompt ('Введіть число від 0 до 9');

// switch (yourSymbol) {
//     case '0':
//         alert(')');
//         break;
//     case '1':
//         alert('!');
//         break;
//     case '2':
//         alert('@');
//         break;
//     case '3':
//         alert('#');
//         break;
//     case '4':
//         alert('$');
//         break;
//     case '5':
//         alert('%');
//         break;
//     case '6':
//         alert('^');
//         break;
//     case '7':
//         alert('&');
//         break;
//     case '8':
//         alert('*');
//         break;
//     case '9':
//         alert('(');
//         break;
//     default:
//         alert('Введено невірні дані');
// }

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// let startRange = parseInt(prompt('Введіть початок діапазону чисел'));
// let endRange = parseInt(prompt('Введіть кінець діапазону чисел'));
// let sum = 0;

// for (let i = startRange; i <= endRange; i++) {
//     sum += i;
//     console.log(sum);
// }
// alert(`Сума всіх чисел в діапазоні від ${startRange} до ${endRange} дорівнює ${sum}`);


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// let num = parseInt(prompt('Введіть перше число'));
// let num2 = parseInt(prompt('Введіть друге число'));   

// while (num2) {
//     let temp = num2;
//     num2 = num % num2;
//     num = temp;
// }
// alert(`Найбільший спільний дільник: ${num}`);


// Запитай у користувача число і виведи всі дільники цього числа.
let userNumber = parseInt(prompt('Введіть число для пошуку його дільників'));
let divisors = [];

for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i === 0) {
        divisors.push(i);
    }
}
alert(`Дільники числа ${userNumber}: ${divisors}`);  
