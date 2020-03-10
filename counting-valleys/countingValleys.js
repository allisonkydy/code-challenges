'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    // keep track of height
    let height = 0;
    // keep track of valley count
    let valleys = 0;
    // for each step in the path...
    for (let i = 0; i < s.length; i++) {
        // if step is up, add 1 to height
        if (s[i] === 'U') {
            height++;
            // check if height is zero
            if (height === 0) {
                // add 1 to valley count
                valleys++;
            }
        }
        // if step is down, subtract 1 from height
        if (s[i] === 'D') {
            height--;
        }
    }
    return valleys;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
