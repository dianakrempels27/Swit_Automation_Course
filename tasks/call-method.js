/**Написати метод видалення buy() продукту зі списку.
 * Як потрібно визвати метод view, щоб він працював коректно.
 * const product = {name:""; id:""};
 * const shop = {
 *      title:"Kids",
 *      products:["dolls","car","piramida", "box", "sachok"];
 *      view() {
 *          const result = `${this.name} product with ${this.id} id`;
 *          console.log(result);
 *          return result;
 * }
 * }
 */

const product = {name:"", id:""};
const shop = {
    title:"Kids",
    products:["dolls","car","piramida", "box", "sachok"],
    buy(product) {
        const newProduct = this.products.splice(newProduct);
    },
    view() {
        const result = `${this.name} product with ${this.id} id`;
        console.log(result);
        return result;
    } 
 };

 shop.buy("car");
 shop.view();