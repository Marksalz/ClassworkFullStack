
function printUppercaseName(name) {
    return name.toUpperCase();
}

function printYearOfBirth(age) {
    const currentYear = new Date().getFullYear();
    return (currentYear - age);
}

//console.log(printUppercaseName("menachem"));
//console.log(printYearOfBirth(24));


// const add = (x, y) => {
//     return x + y;
// }

// const subtract = (x, y) => {
//     return x - y;
// }

// const multiply = (x, y) => {
//     return x * y;
// }

// const devide = (x, y) => {
//     return x / y;
// }

const start = (num, func) => {
   return func(num);
}

const multiply = (num) => {
    return subtract(num * 2);
}

const subtract = (num) => {
    return divide(num - 5);
}

const divide = (num) => {
    return (num / 10);
}

console.log(start(5,multiply));


