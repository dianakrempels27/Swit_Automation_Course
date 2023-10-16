//Написати клас Меблі, який приймає на вхід параметр name; color:
//Клас має методи: getSize, який повертає значення - small, medium, large взалежності від name, 
// який передається на вхід. Якщо name === “тумбочка“ або “стілець“ , то small. 
// Стіл, Пенал, крісло - medium. Диван, ліжко, шафа - large. 
//changeColor, який міняє колір меблі;
//getColor, який повертає колір;
//Протестувати даний метод;

class Furniture {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    getSize() {
        if (this.name  === "тумбочка" || this.name === "стілець") {
            return "small"
        }
        else if (this.name === "стіл" || this.name === "пенал" || this.name === "крісло") {
            return "medium"
        }
        else if (this.name === "диван" || this.name === "ліжко" || this.name === "шафа") {
            return "large"
        }
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    getColor() {
        return this.color
    }
}

const furniture = new Furniture ("диван", "червоний");

console.log(furniture.getSize());
console.log(furniture.getColor());

furniture.changeColor("чорний");

console.log(furniture.getColor());