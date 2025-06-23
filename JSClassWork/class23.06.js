
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

// const start = (num, func) => {
//    return func(num);
// }

// const multiply = (num) => {
//     return subtract(num * 2);
// }

// const subtract = (num) => {
//     return divide(num - 5);
// }

// const divide = (num) => {
//     return (num / 10);
// }

// console.log(start(5,multiply));

// function test() {
//     var x = 5;
//     if (true) {
//         let x = 10;
//     }
//     console.log(x);
// }

// test();

// let count = 3;
// function shadow() {
//   let count = 7;
//   {
//     let count = 9;
//     console.log(count);
//   }
//   console.log(count);
// }
// shadow();
// console.log(count);

const array = ["smsj", "jsjs", "kaka", "iejsja"];

function printValue(value) {
    console.log(`value: ${value}`);
}

function myForEach(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        func(arr[index]);
    }
}

myForEach(array,printValue);
