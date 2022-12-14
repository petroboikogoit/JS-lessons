'use strict';
/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

//const { firstName, lastName, age } = user;

// можна але не ок
// const firstName = user.firstName
// const lastName = user.lastName
// const age = user.age

// console.log(firstName);
// console.log(lastName);
// console.log(age);

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє змінну firstName.
? властивість age надасть змінну userAge.
? властивість isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
*/

// const { firstName, age: userAge, isAdmin = false } = user;

// console.log('firstName: ', firstName);
// console.log('userAge: ', userAge);
// console.log('isAdmin: ', isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const { number, flag, employees, langs } = team;
// const { original: originalLang, secondary: secondaryLang } = langs;

// // вкладена деструктуризація
// // const {
// //   number,
// //   flag,
// //   employees,
// //   langs: { original: originalLang, secondary: secondaryLang },
// // } = team;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);
// console.log('originalLang: ', originalLang);
// console.log('secondaryLang: ', secondaryLang);

/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [user1, , user2] = names;

// const rgb = [0, 255, 34];
// const [red, green, blue] = rgb;

// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary (salaries), яка повертає ім'я найбільш оплачуваного працівника.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// [
//   ['John', 100],
//   ['Pete', 300],
//   ['Mary', 250]
// ]

const topSalary = function (salaries) {
  const salariesArr = Object.entries(salaries);
  console.log(salariesArr);
  let max = 0;
  let employeeName = '';

  for (const salary of salariesArr) {
    const [name, value] = salary;

    if (value > max) {
      max = value;
      employeeName = name;
    }
  }

  return {
    name: employeeName,
    salary: max,
  };
};

console.log(topSalary(salaries));
