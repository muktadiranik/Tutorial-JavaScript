import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

const print_spread = (str_1, ...str_n) => {
  console.log(str_1);
  console.log(...str_n);
};

print_spread("string_1", "string_2", "string_3");

let str_arr = ["string_1", "string_2", "string_3"];
let str_arr_2 = ["string_4", "string_5", ...str_arr];
let str_arr_3 = [...str_arr, "string_6", ...str_arr_2];
print_spread(str_arr_3);

// object
let obj_1 = {
  name: "John",
  age: 24,
};

let obj_2 = {
  CGPA: 3.38,
  languages: ["C", "C++", "Java"],
};

let obj = { ...obj_1, ...obj_2 };
console.log(obj);
