import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

var numbers = [1, 2, 3, 4, 5];
var squared_numbers = [];

// for each
numbers.forEach((element) => {
  squared_numbers.push(element * element);
});
console.log(squared_numbers);

// map
var square_root_numbers = squared_numbers.map((element) => {
  return Math.sqrt(element);
});
console.log(square_root_numbers);

// filter
var even_numbers = squared_numbers.filter((element) => {
  return element % 2 == 0 || element % 3 == 0 ? element : null;
});
console.log(even_numbers);

const names = ["Jhon", "Jane", "Smith", "Steve"];
var names_start_with_S = names.filter((element) => {
  return element.startsWith("S") ? element : null;
});
console.log(names_start_with_S);

var names_end_with_e = names.filter((element) => {
  return element.endsWith("e") ? element : null;
});
console.log(names_end_with_e);
