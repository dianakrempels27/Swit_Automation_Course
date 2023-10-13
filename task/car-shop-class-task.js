/**
 * Створити файл, де реалізувати клас з методами:
 * class CarShop
 * методи:
 *  - addCar - метод,який буде додавати машину до магазину у необхідній кількості:
 *      - modelOfCar (наприклад ford, hundai,...),
 *      - count (кількість даної моделі);
 *  - removeCar - метод,який буде видаляти машини з магазину (купили).
 *  - getCars - метод, який буде повертати всі наявні моделі в магазині з кількістю;
 *  - getCar - метод,який має на вхід параметр model і повертає клас Car метод get;
 * 
 * Створити інший окремий файл:
 * class Car - буде приймати на вхід model : string;
 * методи:
 *  - get - повертає об'єкт,який містить model, color, year,count;
 * 
 * В іншому файлі зробити імпорт CarShop та створити метод, який додає задані моделі : [{model:"ford", count:3}, ...];
 * Доповнити масив даними.
 * протестувати додавання машин, видалення машина та вивід масив.
 */

class CarShop {
    constructor() {
      this.cars = [];
    }
  
    addCar(modelOfCar, count) {
      const existingCar = this.cars.find(car => car.model === modelOfCar);
  
      if (existingCar) {
        existingCar.count += count;
      } else {
        this.cars.push({ model: modelOfCar, count: count });
      }
    }
  
    removeCar(modelOfCar, count) {
      const existingCar = this.cars.find(car => car.model === modelOfCar);
  
      if (existingCar) {
        existingCar.count -= count;
  
        if (existingCar.count <= 0) {
          const index = this.cars.indexOf(existingCar);
          this.cars.splice(index, 1);
        }
      }
    }
  
    getCars() {
      return this.cars;
    }
  
    getCar(model) {
      const existingCar = this.cars.find(car => car.model === model);
  
      if (existingCar) {
        return existingCar;
      }
    }
  }
  
  module.exports = CarShop;