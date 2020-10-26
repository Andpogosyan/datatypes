// задача  1

// Есть объект salaries с произвольным количеством свойств,
//  содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая 
// возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.




// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// let sumSalaries = (obj) => {
//     let sum = 0;
//     for (let value of Object.values(obj)) {
//         sum += value;
//     }
//     return sum;
// }
// alert(sumSalaries(salaries)); // 650


// задача 2
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//     name: 'John',
//     age: 30
// };

// let count = (user) => {
//     return Object.values(user).length;
// }

// console.log(count(user))