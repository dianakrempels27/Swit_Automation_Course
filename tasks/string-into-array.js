/**
 * #2:
 * Є рядочок const myString = "1,3,4,1,3,2,4,66,4,312,32,45,23,22,5,2,21,1,56,27,42,786,343,2,3,123,234,743,2,3";
 * Створити з рядка масив і відфільтрувати - лишити числа <100;
 * Конвертнути масив знову у рядок;
 */

//const myString = "1,3,4,1,3,2,4,66,4,312,32,45,23,22,5,2,21,1,56,27,42,786,343,2,3,123,234,743,2,3";
//const myStringArray = myString.split(",").filter((number) => number < 100).toString();
//const filteredArray = myStringArray.filter((number) => number < 100);
//const convertedIntoString = filteredArray.toString();
//console.log(myStringArray);

const myString = "1,3,4,1,3,2,4,66,4,312,32,45,23,22,5,2,21,1,56,27,42,786,343,2,3,123,234,743,2,3";
function turnStringIntoArray(myString) {
    return myString.split(",");
};
console.log(turnStringIntoArray(myString));