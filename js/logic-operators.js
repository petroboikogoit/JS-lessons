'use strict';
/*
 * Логічні оператори (&& || !)
 */

//* && - зупиняється на false
//* Якщо всі операнди були правдиві, поверне останній.
//* Якщо результат false, зупиняється і повертає вихідне значення цього операнда.
// const result = 4 && 0 && 'Hello!';

// console.log(result);

//* || - зупиняється на true
//* Повернає перше правдиве значення, або останнє, якщо правдивого не знайдено.

// const username = prompt('Your name?') || 'Anonymus';

// console.log(`Hello ${username}`);

//* ! - перетворює на протилежне значення до булевого

// console.log(!1);

//? логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Перетворення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
