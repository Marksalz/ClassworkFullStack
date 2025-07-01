// const obj = {
//     name: "Menachem",
//     age: 24,
//     showAge: function () {
//         console.log("Age is", this.age);
//     }
// }

// obj.showAge();

// const obj2 = {
//     name: "Bob",
//     age: 65
// }

// obj2.fn = obj.showAge;
// obj2.fn();

const q = {
    description: "3+5",
    ask: function () {
        console.log(this.description);
    },
    askArrow: () => {
        console.log(this.description);
    }
}

q.ask();
q.askArrow();

// function decorator(fn) {
//     const start = Date.now();
//     fn();
//     const end = Date.now();
//     return end - start;
// }

// decorator(q.ask.bind(q));