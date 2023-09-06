/**
 * Є функція:
 * await waitTimer(timer) {
 *      let i = 0;
 *      while(timer < i) {
 *          console.log(`Wait ${i} seconds`);
 *          i++;
 *      }
 * }
 * Написати вивід функції і протестувати функцію
 */

async function waitTimer(timer) {
    let i = 0;
    while(timer < i) {
        console.log(`Wait ${i} seconds`);
        i++;
    }
}

waitTimer(2).then(result => {
    console.log(result);
});