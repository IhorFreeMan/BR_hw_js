'use strict'



// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти:

// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// У класі Admin повинні бути такі компоненти:

// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers


class User {
    #name;
    #role;
    #password;

    constructor(name, role, password,) {
        this.#name = name;
        this.#role = role;
        this.#password = password;
    }

    getName() {
        return this.#name;
    }

    getRole() {
        return this.#role;
    }

    setRole(newRole) {
        this.#role = newRole;
    }

    validatePassword(inputPassword) {
        return this.#password === inputPassword;
    }

    setChangeName(newName) {
        this.#name = newName;
    }

    setChangePassword(newPassword) {
        this.#password = newPassword;
    }   
}


class Admin extends User {
    #users = [];

    constructor(name, password) {
        super(name, 'admin', password);
    }

    addUser(name, role, password) {
        const newUser = new User(name, role, password);
        this.#users.push(newUser);
        console.log(`User ${name} added.`);
    }

    removeUser(name) {
        const initialLength = this.#users.length;
        this.#users = this.#users.filter(user => user.getName() !== name);

        if (this.#users.length < initialLength) {
            console.log(`User ${name} removed.`);
        } else {
            console.log(`User ${name} not found.`);
        }
    }

    changeUserRole(name, newRole) {
        const user = this.#users.find(user => user.getName() === name);
        if (user) {
            // 4. Call the PUBLIC method, not the private one
            user.setRole(newRole);
            console.log(`Role for ${name} changed to ${newRole}.`);
        } else {
            console.log(`User ${name} not found.`);
        }
    }

    getAllUsers() {
        return this.#users.map(user => ({
            name: user.getName(),
            role: user.getRole()
        }));
    }

    removeAllUsers() {
        this.#users = [];
        console.log("All users removed.");
    }
}


// adminPetro = new Admin('Petro', 'securePass');
// adminPetro.addUser('Ivan', 'user', 'pass123');
// adminPetro.addUser('Olena', 'admin', 'adminPass');

// console.log(adminPetro.getAllUsers());



// // --- Testing the Code ---
// const userIhor = new User('Ihor', 'user', 'testPass');
// console.log(userIhor.getName());
// console.log(userIhor.getRole());
// console.log(userIhor.validatePassword('testPass'));
// userIhor.setChangeName('Ihor2');
// userIhor.setChangePassword('newPass2');
// console.log(userIhor.getName());
// console.log(userIhor.validatePassword('newPass2')); 

console.log('---_____________________________________---');

const myAdmin = new Admin('Alice', 'adminPass123');

myAdmin.addUser('Bob', 'user', '12345');
myAdmin.addUser('Ivan', 'user', 'pass123');

console.log(myAdmin.getAllUsers());

// myAdmin.removeUser('Ivan');

// // myAdmin.removeAllUsers();
// console.log(myAdmin.getAllUsers());


