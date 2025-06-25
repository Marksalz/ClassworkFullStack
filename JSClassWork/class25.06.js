import chalk from 'chalk';

console.log(chalk.grey('Hello world!'));

// function Book(author, ganer, numOfPages) {
//     this.author = author;
//     this.ganer = ganer;
//     this.numOfPages = numOfPages;
//     this.showDetails = function () {
//         console.log(`Book details: `);
//         console.log(`aurhor: ${this.author}, ganer: ${this.ganer}, number of pages: ${this.numOfPages}`);
//     }
// }

// b1 = new Book("David", "fiction", "645");
// b1.showDetails();

// const obj1 = {};
// const obj2 = { name: "Menachem" };

// console.log(obj1.name);
// Object.setPrototypeOf(obj1, obj2);
// console.log(obj1.name);

// function Car(brand) {
//     this.brand = brand;
//     this.drive = function () {
//         console.log("vroom vroom");
//     }
//     this.fuel = function () {
//         console.log("gas gas");
//     }
// }

// function Tesla() {
//     this.isBattary = true;
// }

// const t = new Tesla();
// const skoda = new Car("Skoda");

// Object.setPrototypeOf(t, skoda);

// t.drive();
// t.fuel();

// function Animal(name) {
//     this.name = name;
//     this.makeSound = function () { }
// }

// function Dog(name) {
//     this.name = name;
//     this.makeSound = function () {
//         console.log("Woof Woof");
//     }
// }

// function Cat(name) {
//     this.name = name;
//     this.makeSound = function () {
//         console.log("Meow Meow");
//     }
// }
// const animal = new Animal("animal");
// const dog = new Dog("dog");
// const cat = new Cat("cat");

// Object.setPrototypeOf(dog, animal);
// Object.setPrototypeOf(cat, animal);

// dog.makeSound();
// cat.makeSound();

// console.log(Object.getPrototypeOf(dog));
// console.log(Object.getPrototypeOf(cat));

