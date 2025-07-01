import { readFile, stat, readdir, lstat } from "node:fs";
import path, { resolve } from "node:path";
import os, { freemem } from "node:os"

//Question 1
function readTxt() {
    const p1 = new Promise((resolve, reject) => {
        readFile("file1.txt", 'utf8', (err, file) => {
            resolve(file);
        })
    });

    const p2 = p1.then((file) => {
        stat("file1.txt", (err, data) => {
            console.log(file);
            console.log(data.birthtime, data.size);
        })
    })
}

// readTxt();

//Question 2
function findFiles() {
    const dirPath = 'C:\\ClassworkFullStack\\JSClassWork';
    readdir(dirPath, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                const fullPath = path.join(dirPath, file);
                lstat(fullPath, (err, stats) => {
                    if (!err && stats.isFile()) {
                        console.log(`File: ${file}`);
                    }
                });
            });
        }
    });
}

// findFiles();

//Question 3
function countdown(time) {
    if (time >= 0) {
        console.log(time);
        setTimeout(() => countdown(time - 1), 1000);
    } else {
        console.log("Time's up!");
    }
}

// countdown(5);

//Question 4
function printRandomLine() {
    const p1 = new Promise((resolve, reject) => {
        readFile("quotes.txt", 'utf8', (err, file) => {
            resolve(file);
        })
    });

    p1.then((file) => {
        console.log(file);
        const lines = file.split('\n').filter(line => line.trim() !== '');
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        console.log(`Random line: ${randomLine}`);
    })
}

// printRandomLine();

//Question 5
function freeSystemMemory() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const freeMem = os.freemem();
            console.log(freeMem);
        }, i * 2000);
    }
}

freeSystemMemory();