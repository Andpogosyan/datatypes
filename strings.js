//задача 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// let str = prompt('enter your name', '');


// let upper = (string) => {
//     let firstLetter = string.slice(0, 1);
//     let otherLetters = string.slice(1)
//     console.log(firstLetter.toUpperCase() + otherLetters);

// }
// upper(str);

//задача 2
// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// let checkSpam = (str) => {
//     str = str.toLowerCase();
//     if (str.includes('viagra') || str.includes('xxx')) {
//         return true;
//     } else {
//         return false;
//     }
// };


// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


//Задача 3
// Создайте функцию truncate(str, maxlength), 
// которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", 
// так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, 
// если усечение не требуется, либо, если необходимо, усечённая строка.



// let truncate = (str, maxlength) => {
//     if (str.length > maxlength) {
//         let newStr = str.slice(0, maxlength) + '...';
//         return newStr;
//     } else {
//         return str;
//     }
// };

// console.log(truncate('Veniamin', 5));

//Задача 4
// Есть стоимость в виде строки "$120".
// То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять числовое значение и возвращать его

// let extractCurrencyValue = (str) => {
//     if (str[0] === '$') {
//         let cost = str.slice(1);
//         return +cost;
//     } else {
//         return +str;
//     }
// }

// console.log(extractCurrencyValue('$120'))