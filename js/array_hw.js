'use strict';

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, 
// ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

let shoppingList = [
    { name: "Milk", quantity: 2, purchased: false, pricePerUnit: 1.5 },
    { name: "Bread", quantity: 1, purchased: true, pricePerUnit: 2.0 },
    { name: "Eggs", quantity: 12, purchased: false, pricePerUnit: 0.1 },
    { name: "Butter", quantity: 1, purchased: true, pricePerUnit: 3.0 },
];

function displayShoppingList(shopLlist) {
    // sort list
    shopLlist.sort(function (a, b) {
        // Якщо a некуплений, а b - куплений, 'a' має бути першим
        if (a.purchased === false && b.purchased === true) {
            return -1;
        }

        // Якщо a куплений, а b - некуплений, 'b' має бути першим
        if (a.purchased === true && b.purchased === false) {
            return 1;
        }

        // В усіх інших випадках (статуси однакові) їх порядок неважливий
        return 0;
    });

    // add total price 
    shopLlist.forEach(item => {
        item.total = (item.quantity * item.pricePerUnit)
        // const total = item.quantity * item.pricePerUnit;
        // console.log(`${item.name} - Кількість: ${item.quantity}, Придбаний: ${item.purchased}, Ціна за одиницю: ${item.pricePerUnit.toFixed(2)} грн, Всього: ${total.toFixed(2)} грн`);
    });
}

function purchaseItem(list, itemName) {
    const item = list.find(i => i.name.toLowerCase() === itemName.toLowerCase());
    if (item.purchased === false) {
        item.purchased = true;
    }else {
        console.log(`${item.name} вже придбаний.`);
    }
}

// Example usage:
displayShoppingList(shoppingList); 
console.log(shoppingList);

console.log("______");

purchaseItem(shoppingList, "Eggs");
console.log(shoppingList.find(i => i.name === "Eggs"));  // purchased: true