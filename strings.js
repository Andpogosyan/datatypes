//задача 1

// let str = prompt('enter your name', '');


// let upper = (string) => {
//     let firstLetter = string.slice(0, 1);
//     let otherLetters = string.slice(1)
//     console.log(firstLetter.toUpperCase() + otherLetters);

// }
// upper(str);

//задача 2

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

// let extractCurrencyValue = (str) => {
//     if (str[0] === '$') {
//         let cost = str.slice(1);
//         return +cost;
//     } else {
//         return +str;
//     }
// }

// console.log(extractCurrencyValue('$120'))