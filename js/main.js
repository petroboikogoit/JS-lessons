'use strict';
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 3;

// if (num > 5) {
//   console.log('Hello!');
// }

/*
? Дана строка, яка містить символи, наприклад, 'abcde'.
? Перевірте, що першим символом цієї строки є буква 'a'.
? якщо це так - виведіть 'так', в іншому випадку виведіть 'ні'.
*/

// const str = 'abcde';

// if (str.startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

/*
? Запросити у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const number = Number(prompt('Введіть число'));

// if (number === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
? В змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - 1 чверть години
? [15 до 30) - 2 чверть години
? [30 до 45) - 3 чверть години
? [45 до 60) - 4 чверть години
*/

// const min = 40;

// if (min >= 0 && min < 15) {
//   console.log('1 чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('2 чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('3 чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('4 чверть години');
// } else {
//   console.log('Не потрапили в діапазон');
// }

/*
? Напишіть код, який запитуватиме:
? 'яка «офіційна» назва JavaScript?'
? Якщо користувач ввів «ECMAScript»,
? то показати: «Вірно!», в іншому випадку – показати: «Не знаєте? ECMAScript!»
*/

// const userInput = prompt('Яка «офіційна» назва JavaScript?');

// if (userInput.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить в console.log:
? 1, якщо значення більше за нуль,
? -1, якщо значення меньше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише числа.
*/

// const number = Number(prompt('Введіть число'));

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? Перевірте за допомогою об'єкта navigator і властивості userAgent
? який браузер у користувача, результат вивести в консоль
*/

// const userBrowser = navigator.userAgent;

// console.log(userBrowser);

// if (userBrowser.includes('Chrome')) {
//   console.log('Браузер Chrome');
// } else if (userBrowser.includes('Firefox')) {
//   console.log('Браузер Firefox');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

/*
?  Напишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 і 3', ''));

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');
//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');
//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може і 3');
//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
 * Тернарний оператор
 */

//<умова> ? <цей вираз виконається якщо умова === true> : <цей вираз виконається якщо умова !== true>

/*
? Перепишіть конструкцію if за допомогою тернарного оператора:
*/
// const a = 2;
// const b = 1;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }
// console.log(result);

/*
?  Перепишіть if..else з використанням кількох операторів '?'.
*/

const login = 'Директор';
let message =
  login === 'Співробітник'
    ? 'Привіт'
    : login == 'Директор'
    ? 'Доброго дня'
    : login == ''
    ? 'Немає логіну'
    : '';

console.log(message);

// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
