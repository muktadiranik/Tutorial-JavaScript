("use strict");
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

// default parameter
const print = (str = "default parameter") => {
  console.log(str);
};
print();
print("string");

// rest parameter
const print_rest = (str_1 = "default parameter", ...str_n) => {
  console.log(str_1);
  for (const i of str_n) {
    console.log(i);
  }
};
print_rest("string_1", "string_2", "string_n");
