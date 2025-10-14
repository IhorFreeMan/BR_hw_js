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



// let sum = (0.1 + 0.2).toFixed(2); // 0.3
// console.log(sum);
// console.log(typeof sum);


// let a = "1";
// let b = 2;
// let c = Number(a) + b;
// console.log(c);
// console.log(typeof c);


// let flashGB = Number(prompt("Введіть обєм флешки в ГБ"))
// let flashMb = flashGB * 1024;
// const fileSize = 820;
// // Math.floor() — округлює результат вниз
// let fileCount = Math.floor(flashMb / fileSize); 
// alert(`На флешку розміром ${flashGB} ГБ поміститься ${fileCount} файлів розміром ${fileSize} МБ`);


// let money = Number(prompt("Введіть суму грошей, яку ви маєте"));
// let price = Number(prompt("Введіть ціну однієї шоколадки"));
// let chocolates = Math.floor(money / price);
// let change = money % price;
// alert(`Ви можете купити ${chocolates} шоколадок і у вас залишиться ${change} решта`);


// let number = Number(prompt("Введіть тризначне число"));
// let str = String(number);
// let reversed = Number(str[2] + str[1] + str[0]);
// alert(`Ваше число у зворотньому напрямку: ${reversed}`);


// let deposit = Number(prompt("Введіть суму депозиту"));
// let rate = 5; // 5% річних
// let manth = 2; // 2 місяці
// let rezealt = deposit * (rate / 100) / 12 * manth;
// alert(`Сума нарахованих відсотків за ${manth} місяці становить: ${rezealt}`);



console.log(2 && 0 && 3)  // 0

console.log(2 || 0 || 3)  // 2

console.log(2 && 0 || 3)  // 3
