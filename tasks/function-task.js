/**
 * Написати функцію, яка буде мати на вхід такі параметри: day (string), isHoliday (boolean)
 * Функція має приймати аргумент день і взалежності від дня виводити результат:
 * Якщо день вихідний або свято - то вивести "цей день вихідний, ми не працюємо",
 * в інакшому випадку - "цей день робочий!"
 */

function daysOfTheWeek(day, isHoliday) {
    if (isHoliday || day === "Sunday" || day === "Saturday") {
        console.log("цей день вихідний, ми не працюємо");
    } else {
        console.log("цей день робочий!")
    }
    }
daysOfTheWeek("Monday", true);