/**
 * Написати функцію, яка приймає на вхід сичловий проміж і повертає суму всіх парних 
 * чисел у цьому проміжку
 */

function sumOfNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfNumbers(1, 10));