const fs = require("fs");

function main(numArrArr) {
    return numArrArr.forEach(numArr => {
        const sumNum = numArr.reduce((acc, cur) => acc += cur, 0)
        console.log(sumNum)
    })
    
}

const lines = fs.readFileSync(0).toString().trim().split("\n");
// const n = Number(lines[0]);
const numArrArr = lines.map(arr => arr.split(' ').map(Number))

main(numArrArr);