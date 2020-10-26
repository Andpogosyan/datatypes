// Задача 1
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив 
// уникальных, не повторяющихся значений массива arr.

// function unique(arr) {
//     let set = new Set(arr);
//     return set;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values))

//Задача 2
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.


// let aclean = (arr) => {
//     let maparr = new Map();
//     for (let i of arr) {

//         let sortedWord = i.toLowerCase().split('').sort().join('');
//         maparr.set(sortedWord, i);

//     }

//     let cleanArr = new Set(maparr.values());
//     return cleanArr;
// }

// console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))

//Задача 3
// Мы хотели бы получить массив ключей map.keys() 
// в переменную и далее работать с ними, например, применить метод .push.

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map);

// keys.push('more')


// console.log(keys);