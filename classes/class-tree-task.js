/**Створити клас Дерево (Tree), який матиме такі проперті:
 * name, sort, isFruits (чи плодове), id - унікальне значення таймстемп;
 * 
 * Створити клас Ліс (Wood), який має методи:
 * посадити дерево до лісу - plantTree() з вхідним параметром назва дерева та сорт,
 * вирубати дерево з лісу - cutDownTree() з вхідними параметром id дерева;
 * та пропертями:
 * listTrees - масив дерев у лісі;
 * countOfTrees - кількість дерев у лісі;
 * name - назва лісу
 */

class Tree {
    constructor (name, sort, isFruits) {
        this.name = name;
        this.sort = sort;
        this.isFruits = isFruits;
        this.id = Date.now();
    }
}

class Wood {
    constructor (name) {
        this.name = name;
        this.listTrees = [];
        this.countOfTrees = 0;
    }
    
    plantTree(name, sort) {
        let tree = new Tree(name, sort, false);
        this.listTrees.push(tree);
        this.countOfTrees++;
    }

    cutDownTree(id) {
       let index = this.listTrees.findIndex(tree => tree.id === id);
       if (index > -1) {
        this.listTrees.splice(index, 1);
        this.countOfTrees--;
       }
    }
}

let forest = new Wood("Міський ліс");

forest.plantTree("Ялинка", "Прованська");
forest.plantTree("Дуб", "Звичайний");
console.log(forest.countOfTrees);

forest.cutDownTree(forest.listTrees[0].id);
console.log(forest.listTrees);