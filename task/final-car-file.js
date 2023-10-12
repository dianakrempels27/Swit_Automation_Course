const CarShop = require('./car-shop-class-task');
const Car = require('./car-class.task');

const car1 = new Car("Ford");
const car2 = new Car("Hyundai");
const car3 = new Car("Toyota");
const car4 = new Car("BMW");

const carShop = new CarShop();

carShop.addCar(car1.get().model, 3);
carShop.addCar(car2.get().model, 2);
carShop.addCar(car3.get().model, 5);
carShop.addCar(car4.get().model, 7);

carShop.removeCar(car1.get().model, 2);

console.log(carShop.getCars());
console.log(carShop.getCar(car1.get().model));