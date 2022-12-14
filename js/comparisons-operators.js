/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом порівняння буде булеве значення.
 * Рядки порівнюються по unicode.
 * При порівнянні рядків, рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди наводяться до числа.
 * null не дорівнює нічому крім себе та undefined. //==
 * undefined не дорівнює нічому крім себе та null. //==
 */
// console.log('Ab' == 'AB');
/*
 * Приведення різних типів до:

 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */
// console.log(null === undefined);

//* Оператор меньше (<)
// console.log(2 < 12);
// console.log('1' > 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('ap' < 'aps');
// console.log('bananana' < 'apple');
// console.log(true > false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор меньше або рівне (<=)
// console.log(5 <= 6);
// console.log('5' >= 5);
// console.log(5 <= 4);

//* Оператор більше або рівне (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не строге порівняння (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == null);

// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строге порівняння (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(4 === 2 + 2);
// console.log(0 === -0);

//* Не рівне (!=)
console.log('4' != 4);

//* Строго не рівно (!==)
console.log('4' !== 4);
