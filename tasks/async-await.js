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
        await new Promise(resolve => setTimeout(resolve, 1000));
        i++;
    }
}

waitTimer(5);