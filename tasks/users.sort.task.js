//Є масив даних:
/**
 * Вивести в новий масив даних відфільтровані дані по даті, взалежності яка дата була передана
 * як параметр. Створити функцію,яка приймає на вхід масив, дату і повертає такі дані:
 *
 */ 
// getEmails(data, "25/09/2023"); //=> ["e3w4@gmail.com"];
/**
 * Якщо даних для дати немає, то повертає пусти масив
 * Дата може передаватись у різному форматі: 25.09.2023, або Sep 25 2023;
 * Для конвертації і порівнянна з датою використати moment js npm package;
 *  */
const data = [
    {
        email:"sun@ukr.net",
        name:"Viktor Bun",
        date:"23/09/2023"
    },
    {
        email:"asdas2@ukr.net",
        name:"Olena kuhar",
        date:"21/09/2023"
    },
    {
        email:"bulka13@ukr.net",
        name:"Oleh Vino",
        date:"18/09/2023"
    },
    {
        email:"e3w4@gmail.com",
        name:"Oksana Lun",
        date:"25/09/2023"
    },
    {
        email:"ew34@ukr.net",
        name:"Maria Kohut",
        date:"28/09/2023"
    },
];

function filterArrayByDate (arr, date) {
    const filteredData = arr.filter(item => item.date === date);
    return filteredData.map(item => item.email)
}

const filteredData = filterArrayByDate (data, "Sep 25 2023");

console.log(filteredData)