/**
 * #1:
 * є масив const = [3,4,5,3,2,10,34,24,10,3,5,77,5,23,2,45,6];
 * Пройтись масивом і замінити кожне значення 10 на текст - "ten";
 */

/** numbers.splice(5, 1, "ten");
*numbers.splice(8, 1, "ten");
* console.log(numbers);
* const changedArray = numbers.map((number) => {
*   if (number === 10) {
*        return "ten";
*    } else {
*       return number
*   }
*});
*console.log(numbers);
*/

const numbers = [3,4,5,3,2,10,34,24,10,3,5,77,5,23,2,45,6];
function replaceEveryTenIntoWord(numbers) {
    return numbers.map((number) => {
        if (number === 10) {
            return "ten";
        } else {
            return number
        }
    });
}
console.log(replaceEveryTenIntoWord(numbers));