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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // keep track of pair count
    let pairs = 0;
    // create a map
    const sockMap = new Map();
    // count socks in array, store count in map
    for (let sock of ar) {
        // if sock not in map, count is 1
        // else iterate count
        if (!sockMap.get(sock)) {
            sockMap.set(sock, 1);
        } else {
            sockMap.set(sock, sockMap.get(sock) + 1);
        }
    }
    // for each sock count in map...
    for (let count of sockMap.values()) {
        // determine number of pairs
        const p = Math.floor(count / 2)
        // add to pair count
        pairs += p

    }
    return pairs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
