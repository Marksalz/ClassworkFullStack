// Question 1
let a = "some string";
let b = "other string";

a = a + b;
b = a.slice(0, 11);
a = a.slice(11);

console.log(a);
console.log(b);


// Question 2
const arr = [
    ["X", "O", "x", "X", "O"],
    ["O", "X", "O", "x", "X"],
    ["x", "O", "X", "O", "O"],
    ["O", "O", "O", "X", "x"],
    ["X", "x", "O", "O", "X"]
];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "X") {
            count++;
            console.log(`"X" found at (${i}, ${j})`);
        }
    }
}

console.log(`Total "X" found: ${count}`);


// Question 3
let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };
console.log(family.children[2].name);
let names = "";
for (let i = 0; i < family.children.length; i++) {
    names += family.children[i].name;
    if (i < family.children.length - 1) {
        names += ", ";
    }
}
console.log(names);


//Question 4
let array = [1, 2, 3, 4, 5];

for (let index = 0; index < Math.floor(array.length / 2); index++) {
    let temp = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = temp;
}

console.log(array);


//Question 5
let mixedArray = [
    42,
    "hello",
    true,
    { name: "Ali" },
    [1, 2, 3],
    false,
    "world",
    3.14
];

mixedArray.forEach(element => {
    console.log(`Type ${typeof (element)}`);
});