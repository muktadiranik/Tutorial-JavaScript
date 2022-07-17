import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

function print(i) {
  console.log(i);
}

numbers.forEach(print);

const names = ["Jhon", "Jack"];
names.forEach((element) => {
  console.log(element);
});

var squared_numbers = [];

numbers.forEach((element) => {
  squared_numbers.push(element * element);
});

squared_numbers.forEach((element, i) => {
  console.log(i, element);
});

squared_numbers.forEach((element, i, arr) => {
  arr[i] = element + 10;
});
console.log(squared_numbers);
