// задача 1
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// let date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

//задача 2

// let date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

// let getWeekDay = (date) => {
//     let weekDay = date.getDay();
//     if (weekDay === 0) {
//         return 'ВС'
//     }
//     if (weekDay === 1) {
//         return 'ПН'
//     }
//     if (weekDay === 2) {
//         return 'ВТ'
//     }
//     if (weekDay === 3) {
//         return 'СР'
//     }
//     if (weekDay === 4) {
//         return 'ЧТ'
//     }
//     if (weekDay === 5) {
//         return 'ПТ'
//     }
//     if (weekDay === 6) {
//         return 'СБ'
//     }
// }

// console.log(getWeekDay(date));

//задача 3

// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.


// let date = new Date(2012, 0, 3);

// let getLocalDay = (date) => {
//     let days = [1, 2, 3, 4, 5, 6, 7];
//     return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} День недели: ${days[date.getDay()]}`
// }


// console.log(getLocalDay(date));

//Задача 4

// Создайте функцию getDateAgo(date, days), возвращающую число, 
// которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:


// let date = new Date(2015, 0, 2);

// let getDateAgo = (date, day) => {
//     let newDate = new Date(date);
//     newDate.setDate(newDate.getDate() - day);
//     return newDate;
// }

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));


// задача 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую 
// последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// let getLastDayOfMonth = (a, b) => {
//     let date = new Date(a, b, 1);
//     date.setMonth(date.getMonth() + 1);
//     date.setDate(date.getDate() - 1);

//     console.log(date.getDate());
// }

// getLastDayOfMonth(2012, 11);

//задача 6
// Напишите функцию getSecondsToday(), 
// возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было 
// перехода на зимнее/летнее время, то:

// let date = new Date();

// let getSecondsToday = (date) => {
//     let todayDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

//     return Math.round((date - todayDate) / 1000);
// }

// console.log(getSecondsToday(date));

//задача 7
// Создайте функцию getSecondsToTomorrow(), 
// возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в 
// ней не должно быть конкретного значения сегодняшней даты.

// let getSecondsToTomorrow = () => {
//     let date = new Date();
//     let tomorrow = new Date(date);
//     tomorrow.setDate(date.getDate() + 1);
//     tomorrow.setHours(0);
//     tomorrow.setMinutes(0);
//     tomorrow.setSeconds(0);

//     console.log((tomorrow - date) / 1000)
// }

// getSecondsToTomorrow();

// Задача 8
// Напишите функцию formatDate(date), форматирующую date 
// по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


// function formatDate(date) {
//     let dayOfMonth = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;

//     year = year.toString().slice(-2);
//     month = month < 10 ? '0' + month : month;
//     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     if (diffSec < 1) {
//         return 'прямо сейчас';
//     } else if (diffMin < 1) {
//         return `${diffSec} сек. назад`
//     } else if (diffHour < 1) {
//         return `${diffMin} мин. назад`
//     } else {
//         return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//     }
// }

// console.log(formatDate(new Date(new Date - 1)))

// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
// console.log(formatDate(new Date(new Date - 86400 * 1000)));