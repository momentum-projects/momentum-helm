
// npm init
// npm install readline
// npm install --save-dev @types/node
// nvm use 14.17.6   
// or
// nvm alias default 14.17.6     

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// let val1;
// let val2;
// rl.question( "first number:", answer => {
//   val1 = answer;
//   rl.question("second number:", answer => {
//     val2 = answer;
//     console.log("the sum is: " + (parseInt(val1) + parseInt(val2)))
//     rl.close()
//   })
// })

// const val1 = window.prompt("First number")
// const val1 = window.prompt("First number")
// alert("the sum is :" + (parseInt(val1) + parseInt(val2)) )

function ask(question: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(question, resolve)
  });
}

async function runAdd() {
  try {
    const val1 = await ask("first number:")
    const val2 = await ask("first number:")
    console.log("The sum is=" + (parseInt(val1) + parseInt(val2)))
  } catch(err) {
    console.log("question rejected")
  } finally {
    rl.close()
  }
} 

runAdd()
.then(() => {
    console.log("it's done");
});
 