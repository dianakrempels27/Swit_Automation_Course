/**
 * Напишіть функцію, яка буде приймати на вхід 2 аргументи - fatherYears:integer|string, sonYears:integer|string;
 * Порахувати і вивести скільки років назад батько був у двара рази старший
 */

function countAgeOfTheFather(fatherYears, sonYears) {
    let father = parseInt(fatherYears);
    let son = parseInt(sonYears);

    const ageDifference = father - (son * 2);

    console.log("Father was twice as old " + ageDifference + " years ago");
}

countAgeOfTheFather(50, 20);