'use strict';

/*
 * Операція spread(з права від присвоєння) як заміна concat та slice
 */

//*  Копія масиву
// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];
// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.firstName = 'Birdie';

// console.log('user: ', user);
// console.log('user2: ', user2);

//* Копіювання складних типів

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// //Lodash - deep copy
// const user2 = _.cloneDeep(user);

// // // "JSON" - deep copy
// // const user2 = JSON.parse(JSON.stringify(user));

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Операція rest(з ліва від присвоєння)
 */

//? Напишіть функцію sum, яка сумує довільну кількість аргументів
const sum = function (...args) {
  let total = 0;

  for (const number of args) {
    total += number;
  }

  return total;
};

console.log(sum(10, 20, 30));

// const numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));
