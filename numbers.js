//Задание 1
// решение как в учебнике ( при нем 0.1 + 0.2 выдает длинную дробь после точки)

// let num1 = +prompt("num1", "0");
// let num2 = +prompt("num2", "0");

// alert( num1 + num2 );



//решение которое будет округлять до длины более длинного массива из двух,полученных из двух введенных чисел

// let num1 = prompt('num1', 0);
// let num2 = prompt('num2', 0);



// let func = (arr) => {
//     let result = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         let dot;
//         if (arr[i] === '.') {
//             dot = i + 1;
//             // console.log(dot);
//             result = arr.length - dot;
//         }
//     }
//     if (num1.split('').length + 1 <= +result && num2.split('').length + 1 <= +result) {
//         if (num1.split('').length <= num2.split('').length) {
//             return +num2.split('').length;
//         } else {
//             return +num1.split('').length;
//         }
//     }
//     return +result;
// }



// console.log((func((`${+num1 + +num2}`).split(''))));
// console.log((+num1 + +num2).toFixed((func((`${+num1 + +num2}`).split('')))));


//задача 3

// let readNumber = () => {
//     let num = prompt('enter a number', '');
//     if (+num) {
//         return +num
//     } else if (num) {
//         return readNumber()
//     } else {
//         return null;
//     }

// }

// console.log(readNumber());

//задача 4

// let random = (min, max) => {
//     let number = Math.random() * (max - min) + min;
//     return number;
// }

// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

//Задача 5 

// let randomInteger = (min, max) => {
//     let number = Math.random() * (max - min) + min;
//     return Math.round(number);
// }

// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));