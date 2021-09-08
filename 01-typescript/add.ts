// npm install readline
// npm install --save-dev @types/node

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let val1: string;
let val2: string;

rl.question("first number: ", answer => {
    val1 = answer;

    rl.question("second number: ", answer => {
        val2 = answer;
        console.log("The sum is: " + (parseInt(val1) + parseInt(val2)));

        rl.close();
    });

});

console.log("this will show first");