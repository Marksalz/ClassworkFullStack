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
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCountObject = {};
    for (const v of vowels) {
        vowelCountObject[v] = 0;
    }
    word.split('')
        .forEach(char => {
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
    const newStr =
        str.split('')
            .map((char) => { return char.toUpperCase() })
            .join('');
    return newStr;
}

//Question 6
function shiftLetters(str) {
    const newStr =
        str.split('')
            .map(char => {
                if (char === ' ') return char;
                return String.fromCharCode(char.charCodeAt(0) - 1);
            })
            .join('');
    return newStr;
}

//Question 7
function swapCase(str) {
    const strAraay = str.split(' ');
    strAraay.map((word) => {
        if (strAraay.indexOf(word) % 2 === 0) {
            newWord = capitalize(word);
            strAraay.splice(strAraay.indexOf(word), 1, newWord);
        }
    })
    const newStr = strAraay.join(' ');
    return newStr;
}



// Example run
const array = [1, 2, 3, 4];
const array2 = ["jsj", 4, 5, "hello"]
const str = "hello to yoou noe tou go home"

//1
//console.log(doubleValues(array));
//2
//console.log(onlyEvenValues(array));
//3
//console.log(showFirstAndLast(array2));
//4
//console.log(vowelCount(str));
//5
//console.log(capitalize(str));
//6
//console.log(shiftLetters(str));
//7
console.log(swapCase(str));





