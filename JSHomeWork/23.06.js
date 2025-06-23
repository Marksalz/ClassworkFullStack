//Question 1
function doubleValues(arr) {
    const newArray = arr.map((num) => { return num * 2 });
    return newArray;
}

//Question 2
function onlyEvenValues(arr) {
    const newArray = arr.filter((num) => { return (num % 2 === 0) });
    return newArray;
}

//Question 3
function showFirstAndLast(arr) {
    const newArray = [arr[0], arr[arr.length - 1]]
        .filter((item) => { return (typeof (item) === "string") });
    return newArray;
}

//Question 4
function vowelCount(word) {
    const vowelCountObject = {};
    word.split('').forEach(char => {
        if (isVowel(char)) {
            vowelCountObject[char] = (vowelCountObject[char] || 0) + 1;
        }
    });
    return vowelCountObject;
}

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

//Question 5
function capitalize(str) {
    return str.split('').map((char) => {return char.toUpperCase()}).join('');
}

//Question 6
function shiftLetters(str) {
    return str.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char >= 'A' && char <= 'Z') {
            return char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            return char;
        }
    }).join('');
}




const array = [1, 2, 3, 4];
const array2 = ["jsj", 4, 5, 6]
const str = "hello to yoou"
//console.log(doubleValues(array));
//console.log(onlyEvenValues(array));
//console.log(showFirstAndLast(array2));
//console.log(vowelCount(str));
//console.log(capitalize(str));
console.log(shiftLetters(str));



