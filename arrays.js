// задача 2
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
//  Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.



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
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, 
// используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда 
// пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, 
// не останавливайте ввод значений при вводе «0».



// let arr = [];

// let sumInput = (array) => {
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

// console.log(sumInput(arr))

//задача 5
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, 
// сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let sum = 0;

//     for (let item of arr) {
//         sum += item;
//         maxSum = Math.max(maxSum, sum);
//         if (sum < 0) sum = 0;
//     }

//     return maxSum;
// }

// console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// console.log( getMaxSubSum([1, 2, 3]) ); // 6
// console.log( getMaxSubSum([100, -9, 2, -3, 5]) // 100