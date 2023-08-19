const values = [1,3,-1,7,-35,3,2,3,-4,5,67,-45,2,4,67,12,4,5,23,5,676,5,23,0,46,776,3];
const positiveNumbers = values.filter(number => number >= 0);
const negativeNumbers = values.filter(number => number < 0);
console.log(negativeNumbers);
console.log(positiveNumbers);