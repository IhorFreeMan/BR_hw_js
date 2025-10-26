'use strict';

// ----------------------- Array ----------------------

// 1. Індекси замість ключів
// 2. Масив - це як правило однотипні дані
// 3. length = останный індекс + 1

// Як створити масив ---------------

// 1) let arr = [];                  літерал
// 2) let arr_2 = new Array();  

let arrFoods = ['milk', 'beer', 'sausage', 'bread'];

let user = {
    name: 'Ihor',
    age: 28,
}

// console.log(arrFoods);
// console.log(typeof arrFoods);
// console.log(typeof user);
// console.log(Array.isArray(user));
// console.log(Array.isArray(arrFoods));
// console.log(arrFoods[0]);

arrFoods[arrFoods.length] = 'meat';
// delete arrFoods[2];     // краще не використовувати
// console.log(arrFoods[2]);

arrFoods[99] = 'water';
console.log(arrFoods);

// -----------------Як додавати дані в масив--------------------

let arrDrinks = ['whiskey', 'rom', 'gin'];

arrDrinks.push('vodka');
arrDrinks.push(arrFoods);
// arrDrinks.push(...arrFoods);
console.log(arrDrinks[4][1]);


// -----------------------------------------------------------

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

// console.log(arrFoods_2);
// console.log(arrFoods_2[1].name);
// --------------------------------------------------------

// ---------------------- ДЗ -----------------------------
// При натискані на кнопку , поля інпутів повинні очищатися від тексту.

const btnAddFood = document.getElementById('btn_amount');
const blockAmount = document.getElementById('amount');
const nameFood = document.getElementById('name-food');
const amountFood = document.getElementById('amount-food');
const boughtStatus = document.getElementById('bought-food');

function checkAmountFood() {
    let nameFoodValue = nameFood.value;
    let amountFoodValue = amountFood.value;

    // Маленька перевірка, щоб не додавати порожні продукти
    if (nameFoodValue.trim() === '' || amountFoodValue.trim() === '') {
        alert('Будь ласка, заповніть усі поля');
        return; // Зупиняємо виконання функції, якщо поля порожні
    }

    // Додаємо новий продукт в масив
    arrFoods_2.push({
        name: nameFoodValue,
        amount: Number(amountFoodValue), // Краще одразу перетворити на число
        isBought: false
    });

    // --- Вирішення Домашнього Завдання ---
    // Очищуємо поля вводу після додавання
    nameFood.value = '';
    amountFood.value = '';
    // ------------------------------------

    // Викликаємо функцію, яка оновить відображення списку на сторінці
    render();
}



function render() {
    // Повністю очищуємо блок перед тим, як виводити оновлений список
    blockAmount.innerHTML = ''; 

    for(let item of arrFoods_2) {
        // Перевіряємо, чи куплений товар, щоб поставити галочку
        const isChecked = item.isBought ? 'checked' : '';

        // Створюємо HTML для одного елемента
        const foodHTML = `
            <p>
                ${item.name}: ${item.amount} 
                <input type='checkbox' ${isChecked}>
            </p>`;

        // Додаємо його в наш блок
        blockAmount.insertAdjacentHTML('beforeEnd', foodHTML);
    }
}

btnAddFood.addEventListener('click', checkAmountFood);

// Перший рендер, щоб показати початковий список
render();

// ------------------------------------------ пепребор масива (Цикли)---------------
// 1 For 

// for(let i = 0; i < arrFoods_2.length; i++) {
//     if(arrFoods_2[i].name === 'milk') {
//         console.log(arrFoods_2[i]);
//     }
// }

// 2 For of 
for(let title of arrFoods_2) {
    if(title.isBought === false) {
        console.log(title)
    }
}

// 3   Метод forEach ------------------

arrFoods_2.forEach(function(item) {
    let nameFoodUpper = item.name.toUpperCase();
    let namefoodLength = item.name.length;
    blockAmount.innerHTML += `<p>${nameFoodUpper} - складається з ${namefoodLength} літер</p>`
})