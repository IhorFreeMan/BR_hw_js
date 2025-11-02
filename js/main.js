'use strict';



let parentBlock = document.getElementById("new-el");

// parentBlock.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.dataset["tagname"] === "a") {
//         let newA = document.createElement("a");
//         // console.log(newA);
//         console.log(`Created new element: ${newA.tagName}`);
//     } else if (e.target.dataset["tagname"] === "p") {
//         let newP = document.createElement("p");
//         console.log(`Created new element: ${newP.tagName} `);
//     } else if (e.target.dataset["tagname"] === "div") {
//         let newDiv = document.createElement("div");
//         console.log(`Created new element: ${newDiv.tagName} `);
//     }
// });




parentBlock.addEventListener("click", (e) => {
    //  Знаходимо елемент, на який клікнули, АБО його найближчого "батька",
    //    який має атрибут [data-tagname].
    const target = e.target.closest('[data-tagname]');

    // Якщо такий елемент не знайдено (клікнули повз кнопки),
    //    просто виходимо з функції.
    if (!target) return;

    e.preventDefault();

    // Отримуємо назву тегу
    const tagName = target.dataset.tagname;

    const newElem = document.createElement(tagName);

    console.log(`Created new element: ${newElem.tagName}`);


});