let numbers = [3, 10, 1, 245, 50, 14, 63, 243];
for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j+1]) {
            const tmp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = tmp;
        }
    }
}
console.log(numbers)