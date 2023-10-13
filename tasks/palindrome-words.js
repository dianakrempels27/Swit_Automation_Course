/**
 * Написати функцію, яка буде виводити чи вхідне слово є паліндромом чи ні.
 * Паліндром - це слово, яке читається в обох напрямках однаково. Наприклад, Анна
 */

function palindrome (string) {
    let result = string.toLowerCase();
    let stringArr = result.split("").reverse().join("");
    return result === stringArr;
};

console.log(palindrome("Anna"));