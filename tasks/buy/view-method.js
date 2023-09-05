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

const shop = {
    title:"Kids",
    products:["dolls","car","piramida", "box", "sachok"],
    view(product) {
        const result = `${product.name} product with ${product.id} id`;
        console.log(result);
        return result;
    },
    buy(productName) {
        const index = this.products.indexOf(productName);
        if (index > -1) {
            this.products.splice(index, 1);
            console.log(`${productName} has been removed from the products list.`);
            return true;
        }
        console.log(`${productName} is not found in the products list.`);
        return false;
    }
 }
 
 const product = {name:"car", id:"100"};
 shop.buy(product.name);