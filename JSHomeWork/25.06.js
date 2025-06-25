//Question 1
function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function () {
        console.log(`Phone: ${this.brand} ${this.model}`);
    }
}

//run example
// const phone1 = new Phone("Samsung", "s22");
// phone1.details();

//*********************************************************

//Question2
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function () {
        return (width * height);
    }
}

//run example
// const r1 = new Rectangle(5, 4);
// console.log(`Area= ${r1.area()}`);

//*********************************************************

//Question 3
function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount;
    }
    this.withdraw = function (amount) {
        if (balance - amount >= 0) {
            this.balance -= amount;
        }
        else {
            console.log("Cannot withdraw not enough money!");
        }
    }
    this.checkBalance = function () {
        console.log(`Current balance: ${this.balance}`);
    }
}

//run example
// const account = new BankAccount("Menachem", 1000);
// account.deposit(500);
// account.checkBalance();
// account.withdraw(200);
// account.checkBalance();

//*********************************************************

//Question4
function Animal(name) {
    this.name = name;
    this.speak = function () {
        console.log(`${this.name} makes a sound`);
    }
}

function Dog(name) {
    this.name = name;
    this.bark = function () {
        console.log(`${this.name} barks`);
    }
}

//run example
// const a1 = new Animal("Test");
// const dog1 = new Dog("Rocky");
// Object.setPrototypeOf(dog1, a1);

// dog1.speak(); //Rocky makes a sound
// dog1.bark(); //Rocky barks

//*********************************************************

//Question 5
function Vehicle(type) {
    this.type = type;
    this.describe = function () {
        console.log(`This is a ${this.type}`);
    }
}

function Car(brand) {
    this.brand = brand;
    this.info = function () {
        console.log(`This is a ${this.brand} ${this.type}`);
    }
}

//run example
// const v1 = new Vehicle("car");
// const c1 = new Car("BMW");

// Object.setPrototypeOf(c1, v1);

// c1.describe();
// c1.info();

//*********************************************************

//Question 6
function Shape() {
    this.area = function () {
        return 0;
    }
}

function Circle(radius) {
    this.radius = radius;
    this.area = function () {
        return (Math.PI * (this.radius ** 2));
    }
}

function Square(side) {
    this.side = side;
    this.area = function () {
        return (this.side ** 2);
    }
}

//run example
// const shape = new Shape();
// const c1 = new Circle(3);
// const sq1 = new Square(4);

// Object.setPrototypeOf(c1, shape);
// Object.setPrototypeOf(sq1, shape);

// console.log(c1.area());
// console.log(sq1.area());

//*********************************************************

//Question 7
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`The ${this.title} by ${this.author}`);
    }
}

//run example
// const b1 = new Book("Running", "Mark");
// b1.info();

//*********************************************************

//Question 8
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }

    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}

//run example
// const st1 = new Student("Alice", "Oxford");
// st1.greet();
// st1.study();

//*********************************************************

//Question 9
class Employee {
    #salary;
    constructor(salary) {
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }

    work() {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary)
    }

    work() {
        console.log("Manager is managing");
    }
}

//run example
const e1 = new Employee(4000);
e1.work();
const m1 = new Manager(5000);
m1.work();

//*********************************************************