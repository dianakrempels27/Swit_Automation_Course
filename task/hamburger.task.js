/** 
 * Якась мережа фастфудів пропонує кілька видів гамбургерів:
 * маленький (50 тугриків, 20 калорій)
 * великий (100 тугриків, 40 калорій)
 * Гамбургер може бути з одним із декількох видів начинок (обов'язково):
 * сиром (+ 10 тугриків, + 20 калорій)
 * салатом (+ 20 тугриків, + 5 калорій)
 * картоплею (+ 15 тугриків, + 10 калорій)
 * Додатково гамбургер можна посипати приправою (+ 15 тугриків, 0 калорій) 
 * та полити майонезом (+ 20 тугриків, + 5 калорій). 
 * Напиши програму, яка розраховує вартість і калорійність гамбургера. 
 * Використовуй ООП підхід (клас Гамбургер, константи, способи вибору опцій і розрахунку необхідних величин).
 * Код має бути захищений від помилок. Уяви, що твоїм класом користуватиметься інший програміст. 
 * Якщо він передає неправильний тип гамбургера, наприклад, або неправильний вид добавки, 
 * має викидатися виняток (помилка не повинна ігноруватися мовчки).
 */

class Hamburger {
    constructor(size, additions) {
      this.size = size;
      this.additions = additions;
    }
  
    calculatePrice() {
      let price = 0;
  
      if (this.size === "small") {
        price += 50;
      } else if (this.size === "large") {
        price += 100;
      } else {
        throw new Error("Invalid hamburger size");
      }
  
      for (let addition of this.additions) {
        if (addition === "cheese") {
          price += 10;
        } else if (addition === "salad") {
          price += 20;
        } else if (addition === "potato") {
          price += 15;
        } else if(addition === "spices") {
          price += 15;
        } else if(addition === "mayonnaise") {
          price += 20;
        } else {
          throw new Error("Invalid hamburger addition");
        }
      }
  
      return price;
    }
  
    calculateCalories() {
      let calories = 0;
  
      if (this.size === "small") {
        calories += 20;
      } else if (this.size === "large") {
        calories += 40;
      } else {
        throw new Error("Invalid hamburger size");
      }
  
      for (let addition of this.additions) {
        if (addition === "cheese") {
          calories += 20;
        } else if (addition === "salad") {
          calories += 5;
        } else if (addition === "potato") {
          calories += 10;
        } else if(addition === "spices" || addition === "mayonnaise") {
          calories += 5;
        } else {
          throw new Error("Invalid hamburger addition");
        }
      }
  
      return calories;
    }
  }
  
  const hamburger = new Hamburger("large", ["cheese", "salad", "mayonnaise"]);
  console.log("Price: ", hamburger.calculatePrice());
  console.log("Calories: ", hamburger.calculateCalories());