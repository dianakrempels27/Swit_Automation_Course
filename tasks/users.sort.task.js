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

const data = require("./data");
const moment = require("moment");

const getEmails = (arr, date) => {
    const filteredData = arr.filter(item => {
        const itemDate = moment(item.date, ["DD/MM/YYYY", "MM/DD/YYYY", "MMM DD YYY"]).format("DD/MM/YYYY");
        const convertedDate = moment(date, ["DD.MM.YYYY", "MMM DD YYYY"]).format("DD/MM/YYYY");
        return itemDate === convertedDate;
});
        return filteredData.map(item => item.email)
}

const filteredData = getEmails(data, "Sep 25 2023");
console.log(filteredData);

//function filterArrayByDate (arr, date) {
    //const filteredData = arr.filter(item => item.date === date);
   // return filteredData.map(item => item.email)
//}

//const now = moment("2023/10/10", "YYYY/MM/DD")
//console.log(now.format("DD/MM/YYYY"))