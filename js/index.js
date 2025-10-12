
/*
let firstName = "Ihor";
let lastName = "Gresko";

console.log(`Hello, ${firstName} ${lastName}!`);

// let 1name = "Ольга";        // не можна починати з цифри
// let first-name = "Ольга";   // дефіс сприймається як мінус
// let let = "Ольга";          // не можна використовувати зарезервовані слова
// let ім’я користувача = "Ольга"; // пробіли не допускаються
// let first name = "Ольга";   // пробіл у назві — помилка

let UserName = prompt("Add your name");
alert("Hello, " + UserName + "!");



const CORENTYEAR = new Date().getFullYear();
let birthYear = Number(prompt("Enter your birth year"));
let yourAge = CORENTYEAR - birthYear;
alert("Your age is" + " " + yourAge)



let side = Number(prompt("Введіть довжину сторони квадрата в см"));
let perimeter = side * 4;
alert("Периметр квадрата дорівнює" + " " + perimeter + " " + "см");



let radius = Number(prompt("Введіть радіус кола в см"));
let area = Math.PI * radius ** 2;
// toFixed(2) — округлює результат до двох знаків після коми
alert("Площа кола дорівнює" + " " + area.toFixed(2) + " " + "см");




let distance = Number(prompt("Введіть відстань між містами в км"))
let time = Number(prompt("Введіть час, за який ви хочете дістатися в години"))
let speed = distance / time
alert("Вам потрібно рухатися зі швидкістю" + " " + speed + " " + "км/год")

*/


const USD_to_EUR = 0.86;

let USD = Number(prompt("Введіть суму в доларах США"));
let EUR = USD * USD_to_EUR;
alert("Це буде" + " " + EUR.toFixed(2) + " " + "євро");