// Тест ES6 синтаксису
const testBtn = document.getElementById('testBtn');
const showMessage = () => {
  console.log('Gulp працює! JavaScript мініфікований та транспільований.');
  alert('✅ Gulp працює правильно!');
};
testBtn.addEventListener('click', showMessage);

// Тест стрілкових функцій
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Подвоєні числа:', doubled);
console.log('JavaScript файл завантажено успішно!');