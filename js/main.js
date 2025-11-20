'use strict'



// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value <= 0) {
            console.log("Радіус повинен бути додатнім числом");
            return;
        }
        this._radius = value;
    }
    get diameter() {
        return this._radius * 2;
    }
    area() {
        return Math.PI * this._radius ** 2;
    }
    circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area().toFixed(2));
console.log(circle.circumference().toFixed(2));


