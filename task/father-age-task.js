/**
 * Напишіть функцію, яка буде приймати на вхід 2 аргументи - fatherYears:integer|string, sonYears:integer|string;
 * Порахувати і вивести скільки років назад батько був у двара рази старший
 */

function fatherSon(fatherYearsOld, sonYearsOld) {
    let bool = false;
    let years = 0;
    while(sonYearsOld > 0) {
        if(fatherYearsOld/sonYearsOld === 2) {
            bool = true;
            break;
        } else {
            years = years + 1;
            fatherYearsOld = fatherYearsOld - 1;
            sonYearsOld = sonYearsOld - 1;
        }
    } 
    if(!bool) {
        return "No such years";
    } else {
        return years;
    }
}

const num = fatherSon(42, 22);
console.log("num:", num);