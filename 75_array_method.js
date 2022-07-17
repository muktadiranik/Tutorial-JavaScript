import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let first_even_num = nums.find((x) => x % 2 === 0);
console.log(first_even_num);

const even_num = (element) => {
  if (element % 2 === 0) {
    return element;
  }
};
let first_even_num_2 = nums.find(even_num);
console.log(first_even_num_2);

let first_even_num_index = nums.findIndex(even_num);
console.log(first_even_num_index);

let obj = [
  {
    id: "Jhon",
    CGPA: 2.5,
  },
  {
    id: "Steve",
    CGPA: 2.8,
  },
  {
    id: "Jane",
    CGPA: 3.1,
  },
  {
    id: "Mike",
    CGPA: 2.2,
  },
];
console.log(obj.find((x) => x.CGPA > 3.0));
