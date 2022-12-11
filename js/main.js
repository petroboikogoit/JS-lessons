'use strict';
/*
 *  Масиви: літерал масиву, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами «Jazz» і «Blues».
? Додайте "Рок-н-рол" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll'); // ['Jazz', 'Blues', 'Rock&Roll']
// console.log(genres[0]); // 'Jazz'
// console.log(genres[genres.length - 1]); // 'Rock&Roll'
// console.log(genres.shift()); // 'Jazz'
// genres.unshift('Country', 'Reggy'); // ['Country', 'Reggy' ,'Blues', 'Rock&Roll']

// console.log(genres); // ['Country', 'Reggy' ,'Blues', 'Rock&Roll']

/*
 * Передача за посиланням та за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і знову виведіть в консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a); // 10
// console.log('b: ', b); // 10

// a = 20;

// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведіть обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]

/*
 * Перебір масиву циклами for і for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведи у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуй цикл для розв'язання задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -1, 23, 37];
// let min = numbers[0];

// //1 Варіант
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

//2 Варіант
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами співробітників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// //1 Варiант
// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// 2 Варiант
// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами співробітників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// 1 Варіант
// for (const managerSalary of managerSalaries) {
//   total += managerSalary;
// }

// for (const developerSalary of developersSalaries) {
//   total += developerSalary;
// }

// console.log(total);

// 2 Варіант
// const salaries = [];

// for (const managerSalary of managerSalaries) {
//   salaries.push(managerSalary);
// }

// for (const developerSalary of developersSalaries) {
//   salaries.push(developerSalary);
// }

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// 3 Варіант
// const allSalaries = [].concat(managerSalaries, developersSalaries);

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split і join, indexOf і includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній величині у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const sidesArr = values.split(' ');
// const area = Number(sidesArr[0]) * Number(sidesArr[1]);

// console.log(area);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const namesArr = names.split(',');
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотній порядок букв)
? та виводить її в консоль.
*/

// 1 Варіант
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reverseCharsArr = [];

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reverseCharsArr.push(charsArr[i]);
// }

// console.log(reverseCharsArr.join(''));

// 2 Вариант решения
//const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(reverseStr);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// 0 === 0
// 1 === 1
// 2 === 2
// 3 === 3
// 1 === 4
// 3 === 5

// for (let i = 0; i < employees.length; i += 1) {
//   //console.log(employees.indexOf(employees[i]));
//   //console.log(i);

//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

//? Співробітник Shaw звільнився, видаліть його з масиву

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray'];
// const indexOfRemovedElement = employees.indexOf('Shaw');
//const res = employees.splice(indexOfRemovedElement, 1); // splice(startIndex, quantity) - mutable  // ['Shaw']
//const res = employees.slice(indexOfRemovedElement, -1); // slice(from, to) - unmutable //['Shaw', 'Watkins']
//const res = employees.slice(0, 2); //['Dennis', 'Shaw']
//const res = employees.slice(-1); //['Ray']

//console.log(employees);
//console.log(res);

// //? Додати нового співробітника Thornton, перед Watkins;
// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray'];
// const indexOfWatkins = employees.indexOf('Watkins');
// employees.splice(indexOfWatkins, 0, 'Thornton');

// console.log(employees);
