import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

let var_1 = 5;
console.log(var_1);
if (true) {
  let var_1 = 10;
  console.log(var_1);
}
console.log(var_1);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const var_2 = 5;
try {
  var_2 = Number(prompt("var_2: "));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log(var_2);
}

console.log(`var_1: ${var_1}, var_2: ${var_2}`);

// function
const print = (a, b) => {
  console.log(`a: ${a}, b: ${b}`);
};

print(5, 10);
