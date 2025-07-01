import { rejects } from "node:assert";
import { readFile } from "node:fs";
import { resolve } from "node:path";

// let person;
// const cb = (err, data) => {
//     if (err) console.log(err);
//     person = JSON.parse(data);
//     console.log(person);
// }

// readFile("file.json", cb);
//console.log(person);

new Promise((resolve, reject) => {
    readFile("file.json", (err, data) => {
        (data) ? resolve(JSON.parse(data)) : reject(err);
    })
})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });