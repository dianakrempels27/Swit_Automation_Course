/**
 * Є масив даних:
 * const titles = ["43 Lesson History", "1 How to start?", "23 Lesson about Nilcolne",...];
 * Написати функцію, яка буде приймати на вхід масив і повертати такі значення:
 * result = ["/43#lesson","/1#lesson","/23#lesson", ...];
 */



const titles = ["43 Lesson History", "1 How to start?", "23 Lesson about Nilcolne"];

function createArrayWithNewValues(arr) {
  const result = arr.map(title => {
    const number = parseInt(title.match(/\d+/)[0]);
    return `/${number}#lesson`;
  });
  return result;
}

const transformedArray = createArrayWithNewValues(titles);
console.log(transformedArray);