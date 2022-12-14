'use strict';
/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло циклу
// }

// let iterator = 0;

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// while (iterator < 5) {
//   console.log('Hello!');

//   iterator = iterator + 1;
// }

/*
? Виведіть числа від 1 до 50
*/

// let num = 1;

// while (num <= 50) {
//   console.log(num);

//   num ++;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */

// let number = 1;
// let result = 0;

// while (number <= 100) {
//   // result = result + number;
//   result += number;
//   number += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
? Діліть його на 2 стільки разів, поки результат ділення не стане меньше 50.
? Яке число отримаємо?
? Обрахуйте к-сть ітерацій, необхідних для цього, і запишіть його в змінну num.
*/

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   counter += 1;
//   // n = n / 2
//   n /= 2;
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, котрий виводить prompt ввести число, більше 100.
? Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
? Цикл должен спрашивать число пока посетитель не введёт число, большее 100.
? Предполагается, что посетитель вводит только числа;
*/

// let number = 0;

// do {
//   number = Number(prompt('Введіть число більше 100'));
// } while (number < 100);

/*
 * For
 */
// for (ініціалізація; умова; пост-вираз) {
// тіло циклу
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i === 3) {
//     console.log('Ми знайшли 3');
//     break;
//   }

//   console.log(i);
// }

/*
? Напишіть програму, котра виводить через console.log всі числа від 1 до 100, з наступними виключеннями.
? Для чисел, націло ділящихся на 3, вона повинна виводити ‘Fizz’,
? а для чисел, ділящихся на 5 – ‘Buzz’.
? Для чисел які кратні 3 і 5 = 'FizzBuzz'
*/

// 1 Рішення
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 Рішення
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//     continue;
//   }

//   if (i % 3 === 0) {
//     console.log('Fizz');
//     continue;
//   }

//   if (i % 5 === 0) {
//     console.log('Buzz');
//     continue;
//   }

//   console.log(i);
// }

// 3 Рішення
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук в вигляді трикутника:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let star = '*';

// for (let i = 0; i < 7; i += 1) {
//   console.log(star);
//   star += '*';
// }

// вивести числа від 100 до 0

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// вивести числа від 0 до 100

// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }

// const str = 'string';

// for (let i of str) {
//   console.log(i, str.indexOf(i));
// }

