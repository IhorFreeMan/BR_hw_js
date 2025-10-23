'use strict';

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2020,
    averageSpeed: 80, // км/год
    fuelTankCapacity: 60, // літрів
    averageFuelConsumption: 7.5, // літрів на 100 км
    drivers: [],

    displayInfo: function() {
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Середня швидкість: ${this.averageSpeed} км/год`);
        console.log(`Обсяг паливного баку: ${this.fuelTankCapacity} літрів`);
        console.log(`Середня витрата палива на 100 км: ${this.averageFuelConsumption} літрів`);
        console.log(`Водії: ${this.drivers.join(', ')}`);
    },

    addDriver: function(name) {
        if (!this.drivers.includes(name)) {
            this.drivers.push(name);
            console.log(`Водій ${name} доданий до списку.`);
        } else {
            console.log(`Водій ${name} вже є у списку.`);
        }
    },

    isDriverPresent: function(name) {
        return this.drivers.includes(name);
    },

    calculateTrip: function(distance) {
        const travelTime = distance / this.averageSpeed;
        const breaks = Math.floor(travelTime / 4);
        const totalTime = travelTime + breaks;
        const fuelNeeded = (distance / 100) * this.averageFuelConsumption;

        console.log(`Для подолання відстані ${distance} км необхідно:`);
        console.log(`Час у дорозі: ${totalTime.toFixed(2)} годин`);
        console.log(`Кількість палива: ${fuelNeeded.toFixed(2)} літрів`);
    }
};


// car.displayInfo();
// car.addDriver('Іван');
// car.addDriver('Петро');
// console.log(car.isDriverPresent('Іван')); // true
// console.log(car.isDriverPresent('Марія')); // false
// car.calculateTrip(500);


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
// то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let time = {
    hours: 12,
    minutes: 30,
    seconds: 45,

    displayTime: function() {
        // padStart(2, '0') додає перевірку щоб строка була рівна 2, в іншому випадку додає 0 на початок
        const hh = String(this.hours).padStart(2, '0');
        const mm = String(this.minutes).padStart(2, '0');
        const ss = String(this.seconds).padStart(2, '0');
        console.log(`${hh}:${mm}:${ss}`);
    } ,

    normalizeTime: function() {
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        if (this.hours >= 24) {
            this.hours = this.hours % 24;
        }
    },

    addSeconds: function(sec) {
        this.seconds += sec;
        this.normalizeTime();
    },

    addMinutes: function(min) {
        this.minutes += min;
        this.normalizeTime();
    },

    addHours: function(hr) {
        this.hours += hr;
        this.normalizeTime();
    },


};

time.displayTime(); // 12:30:45
time.addSeconds(30);
time.displayTime(); // 12:31:15
time.addMinutes(90);
time.displayTime(); // 14:01:15
time.addHours(10);
time.displayTime(); // 00:01:15