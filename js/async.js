'use strict';

// ---------- AJAX (Async JS and XML (JSON - JavaScript Object Notation)) -----------------


// ------------------------- Варіанти Aсинхроності в JS -------------
// 1. setTimeout
// 2. Promise
// 3. Async Await
// 4. XMLHttpRequest
// 5. fetch

// ------------------------------ 1. XMLHttpRequest --------------

let xhr = new XMLHttpRequest();
let url = 'https://jsonplaceholder.typicode.com/users';

// xhr.open('GET', url, true);
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         let newObj = JSON.parse(xhr.responseText);
//         newObj.username = 'NaviCom';
//         console.log(newObj.name);
//         console.log(newObj);
//     } else {
//         console.error(`Error request`, xhr.status)
//     }
// }
// xhr.send();



// 2.Fetch -----------

// fetch(urlRequest)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error =>  console.error(`Error:`, error))

// ------------------ Promise (обіцянка) -----------

// Promise - обіцянка щось виконати коли щось відбудеться
// Стан - 1) pending (очикування), 2) fulfilled (успіх), 3) rejected (неуспіх)
// Result - 1) undefined, 2) value, 3) error

// pending     fulfilled     rejected
//              resolve       reject
// undefined    value          error
//  then()        catch()


// const promise = new Promise((resolve, reject) => {
//     resolve('OK');
//     setTimeout(() => {
//         reject(new Error('Error'))
//     }, 1500)
// })

// promise.then(() => value);
// promise.finally(console.log(`Я виконаюсь завжди не залежно від результату!`)
// );

// console.log(promise);


// fetch(url)
//     .then(response => {
//         if (!response.ok) throw new Error(`Помилка Сервера!`);
//         return response.json();
//     })
//     .then(users => console.log(users))
//     .catch(err => console.log(err))
//     .finally(() => {
//         console.log(`Запит завершено`);
//     });


//----------------- Fetch Practice --------------------

let btnAddPost = document.querySelector('#btn-add-post');
let blockForPosts = document.querySelector('#posts');
let amountPost = document.querySelector('#amount_post');

const urlPosts = new URL('https://jsonplaceholder.typicode.com/posts');

let getAmountPosts = function () {
    let amountPostsVal = amountPost.value;
    let urlPostsLimit = new URL(`?&_limit=${amountPostsVal}`, urlPosts);
    return urlPostsLimit;
}

let createBtnRes = function() {
    let btnRes = document.createElement('button');
    btnRes.innerText = 'Clear All';
    btnRes.classList.add('btn_post');
    blockForPosts.insertAdjacentElement('beforeend', btnRes);
    return btnRes;
}

let clearPosts = function() {
    blockForPosts.innerHTML = '';
}

function addPost() {
    fetch(getAmountPosts())
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            data.forEach(post => {
                const [first, ...rest] = post.title;
                post.title = first.toUpperCase() + rest.join('');
                blockForPosts.insertAdjacentHTML('beforeend', `<p><span>${post.id}</span>.<b>${post.title}</b><br/>${post.body}</p>`)
            }); 
            // Створення кнопки Clear All
            let btnRes = createBtnRes();
            btnRes.addEventListener('click', clearPosts);
        })
        .catch(error => console.error(`Error`, error))
        .finally(console.log(`У нас все вийшло!!!`));
        
}

btnAddPost.addEventListener('click', addPost);

