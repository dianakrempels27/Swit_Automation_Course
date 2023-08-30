/**
 * 
 * Написати рекурсивну функцію факторіал
 * формула - n!=n*(n-1)!;
 */

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  };

console.log(factorial(5));