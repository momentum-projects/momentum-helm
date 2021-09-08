// npm install readline
// npm install --save-dev @types/node

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise(resolve => {
      rl.question(question, resolve);
    });
}

async function runAdd() {
    try {
        const val1 = await ask('first number: ');
        const val2 = await ask('section number: ');
        console.log("The sum is: " + (parseInt(val1) + parseInt(val2)));
    }
    catch (err) {
        console.log("Question rejected");
    }
    finally {
        rl.close();
    }
}

runAdd()
.then(() => {
    console.log("it's done");
});