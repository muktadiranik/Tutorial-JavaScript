import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

try {
  var_1 = 5;
  console.log(`var_1: ${var_1}`);
  var var_1;
} catch (error) {
  console.log(error);
}

try {
  var_2 = 5;
  console.log(`var_2: ${var_2}`);
  let var_2;
} catch (error) {
  console.log(error.name);
}

("use strict");
try {
  var_3 = 5;
  console.log(`var_3: ${var_1}`);
  var var_3;
} catch (error) {
  console.log(error);
}
