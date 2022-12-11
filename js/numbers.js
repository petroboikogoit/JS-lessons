'use strict';

/*
 * Математичні оператори (+, -, *, /, %, **)
 */
// const num = 20;
// const num2 = 3;

// const result = num + num2;

// console.log(result);

/*
 ? Дано два числа 10 и 20.
 ? Провести цим числам математичні операції (+ - / *).
*/

//? Провірити чи числа парні 15, 20, 45, 30.
// const isEven = 30 % 2 === 0;

// console.log(Boolean(isEven));

/*
  ? Дано 90 хв, взнати скільки в даному числі годин і хвилин.
  ? Результат вивести в консоль.
*/
// const totalMinutes = 140;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;

// console.log(String(hours).padStart(2, 0), ':', String(minutes).padStart(2, 0));

/*
 * parseInt()   parseFloat()
 */
// const num = Number(prompt('Введіть перше число'));
// const num2 = Number(prompt('ВВедіть друге число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = parseFloat(number);

// console.log(number);

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат в консоль.
  ? Перетворіть строку в число.
*/

//? Дана строка '24px', дістаньте з цієї строки ціле число.
// const str = parseInt('24px');

// console.log(str);

//? Дана строка '25.5%', дістаньте з цієї строки дробове число.
const str = parseFloat('25.5%');

console.log(str);

//? Спробуйте привести до числа, дану строку 'abc'.
// const str = Number('abc');

// console.log(str);

//? Запросіть в користувача ввести два числа, додайте їх і виведіть результат в консоль.

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дане число 23.5, застосуйте до нього різні способи округлення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та степінь.
  ? Зведіть число до степеня і виведіть результат у консоль.
*/

// const number = Number(prompt('Ваше число'));
// const pow = Number(prompt('Введіть степінь'));

// const result = Math.pow(number, pow);

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/
// Math.floor(min + Math.random() * (max + 1 - min));
// const randomNumber = Math.random();
// console.log(randomNumber);

//? Згенеруйте рандомне число. Мінімальне та максимальнe значення, отримати від користувача

// const min = 0;
// const max = 10;
// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
// console.log(randomNumber);
