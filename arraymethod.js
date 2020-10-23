//Задача 1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// let string = 'my-short-string'

// let camelize = (str) => {
//     let strArr = str.split('-');
//     console.log(strArr);
//     return upperFirstLetters(strArr)
// }

// let upperFirstLetters = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             newArr.push(arr[i])
//         } else {
//             let newWord = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//             newArr.push(newWord);
//         }
//     }
//     return newArr.join('')
// }

// console.log(camelize(string));

//Задача 2
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// let array = [1, 2, 3, 4, 5];


// let filterRange = (arr, a, b) => {
//     let newArray = arr.filter(item => (item > a && item < b));
//     return newArray;
// }

// console.log(filterRange(array, 1, 5));
// console.log(array);

//Задача 3

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
//  и удаляет из него все значения кроме тех, которые находятся между a и b. 
//  То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.


// let array = [1, 2, 3, 4, 5, 5];

// let filterRangeInPlace = (arr, a, b) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1)
//             i--;
//         }
//     }
// }

// filterRangeInPlace(array, 3, 5);

// console.log(array);


//Задача 4
//Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr)


//Задача 5 
//Скопировать и отсортировать массив

// let arr = ["HTML", "JavaScript", "CSS"];

// let copySorted = (array) => {
//     let sortedArray = array.concat().sort();
//     return sortedArray;
// };

// let sorted = copySorted(arr);

// console.log(arr, sorted);

//задача 6
// У вас есть массив объектов user, и в каждом из них есть user.name. 
// Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => {item.name})
// console.log(names);

//Задача 7
// У вас есть массив объектов user, и у каждого из объектов есть name, 
// surname и id.

// Напишите код, который создаст ещё один массив объектов с 
// параметрами id и fullName, где fullName – состоит из name и surname.


// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];


// let usersMapped = users.map(item => ({
//     fullname: `${item.name} ${item.surname}`,
//     id: item.id
// }))

// console.log(usersMapped);

//Задача 8
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

let sortByAge = (array) => {
    let newArray = array.sort(array[a].age - array[b].age);
    return newArray;
}

console.log(sortByAge(arr));