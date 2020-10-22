// задача 2

// let styles = ["Jass", "Blues"];

// styles.push('Rock-n-Roll');

// console.log(styles);

// styles[Math.round(styles.length - 1) / 2] = "Classic";

// console.log(styles);

// console.log(styles.shift());

// console.log(styles);

// styles.unshift('Rap', 'Raggy');

// console.log(styles);

//задача 4

// let arr = [];

// let func = (array) => {
//     let value = +prompt('number', '');
//     if (+value > -1 || +value) {
//         if (Boolean(value)) {
//             array.push(value)
//             return func(array);
//         }
//     }
//     let sum = 0;
//     for (let i = 0; i <= (array.length - 1); i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(func(arr))

//задача 5

// let getMaxSubSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i <= (arr.length - 1); i++) {
//         if (arr[i] > -1) {
//             sum += arr[i]
//         } else {
//             sum = 0;
//         }
//     }
//     return sum;
// }