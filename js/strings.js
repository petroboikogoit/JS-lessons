'use strict';
/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запитайте у користувача ім'я з віком та виведіть у консоль повідомлення::
  ? Hello імя_користувача, your age is вік_користувача .
*/

// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = 'Hello' + ' ' + username + ',' + ' ' + 'your age is' + ' ' + age + '.';

// console.log(message);

//? Виконайте завдання вище, використовуючи шаблонні рядки

// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = ;

// console.log(message);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся з кількох символів, чи складається ім'я.
// const username = prompt('Your name?');

//? Попросіть користувача ввести email та переведіть його у нижній регістр.
// let userEmail = prompt('Your email?');

//? Попросите пользователя ввести email и переведите в верхний регистр
// let userEmail = prompt('Your email?');

/*
  ? Є строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', или 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій знаходиться цей підрядок
*/

// let languagesStr = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLowerCase();
// const subStr = 'js';
// const isInclude = languagesStr.includes(subStr.toLowerCase());
// const indexOfSubStr = languagesStr.indexOf(subStr);

// console.log(indexOfSubStr);

//? Є строка '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em чи px;
// const str = '24px';
// const subStr = 'px';

// console.log(str.endsWith(subStr));

//? У нас есть строка '23,4', замените запятую на точку
// let str = '23,4';
// str = str.replace(',', '.');
// str = parseFloat(str);

// console.log(str);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть всі вхожденя dog на monkey.
*/
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

//? У нас есть дата в формате '12:05:21', замените (:) на (.)
// let someDate = '12:05:21';

/*
  ? Дана строка 'Vasyl Pupkin is 24 years old'.
  ? отримати індекси імені та віку.
  ? отримати імя та прізвище.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';

// const indexOfUserName = someStr.indexOf('Vasyl Pupkin');
// const indexOfUserAge = someStr.indexOf('24');
// const indexOfUserInfo = someStr.indexOf('some info');
// const userFullName = someStr.slice(0, 13);

// console.log(indexOfUserName);
// console.log(indexOfUserAge);
// console.log(indexOfUserInfo);

// console.log(userFullName);
