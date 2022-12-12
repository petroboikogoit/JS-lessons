'use strict';
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function імя_функції(праметр_1, параметр_2...) {
// тіло функції
// }

// function declaration

// function showMessage() {
//   console.log('Hello');
// }

// showMessage();

// function expression

// const showMessage = function () {
//   console.log('Hello');
// };

// showMessage();

// function showMessage(username) {
//   console.log(`Hello ${username}!`);
// }

// showMessage('Josie Pierce');
// showMessage('Vera Knight');
// showMessage('Alan Lamb');

// function add(a, b) {
//   const result = a + b;

//   if (result > 100) {
//     return result;
//   }

//   return 'Результат меньше 100';
// }

// const result = add(50, 60);

// console.log(result);

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на висоту людини в метрах у квадраті (2-му степені).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {
//   weight = weight.replace(',', '.');
//   height = height.replace(',', '.');

//   weight = Number.parseFloat(weight);
//   height = Number.parseFloat(height);

//   const result = weight / height ** 2;

//   return result.toFixed(1);
// }

// const userBmi = calcBMI('88,3', '1.75');

// console.log(userBmi); // 28.8

/*
? Напиши функцію min(a,b), яка повертає менше з чисел a та b.
*/

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const sidesArr = dimensions.split(' ');

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцию logItems(items), которая получает массив и использует цикл for,
? который для каждого элемента массива будет выводить в консоль сообщение
? в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
? Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
? а для индекса 2 выведет 3 - Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = namesArr.length-1; i === 0 ; i) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? Усі аргументи будуть лише числами.
*/

// function calcAverage(...args) {
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total / args.length;
// }

function calcAverage() {
  return arguments.length;
}

console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишите функции для работы с коллекцией обучающих курсов courses:
? addCourse(name) - добавляет курс в конец коллекции
? removeCourse(name) - удаляет курс из коллекции
? updateCourse(oldName, newName) - изменяет имя на новое
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким именем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'NestJS'); // 'Курса с таким именем не найдено'

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   if (!courses.includes(name)) {
//     console.log('Курс с таким именем не найден');
//     return;
//   }

//   const indexOfCourse = courses.indexOf(name);

//   courses.splice(indexOfCourse, 1);
// }

// function updateCourse(oldName, newName) {
//   if (!courses.includes(oldName)) {
//     console.log('Курс с таким именем не найден');
//     return;
//   }

//   const indexOfCourse = courses.indexOf(oldName);

//   courses.splice(indexOfCourse, 1, newName);
// }

// function showMessage() {
//   console.log('Hello');
// }

// console.log('1');
// console.log('2');
// console.log('3');
// showMessage();

//вкладені масиви
// const users = ['Poly', 'Ajax', ['🍑', '🍌', '🍋']];

// console.log(users);
