import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

// array destructure
let nums = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = nums;
let [x, y, ...z] = nums;

console.log(a, b, c, d, e);
console.log(z);

// swap
let i = 10,
  j = 20;
[i, j] = [j, i];
console.log(i, j);

// object destructure
let obj = {
  name: "Jhon",
  id: 101,
  CGPA: 3.12,
};

const { id, CGPA } = obj;
console.log(id, CGPA);

// nested object destructure
let obj_2 = {
  name: "Jhon",
  id: 101,
  CGPA: 3.12,
  language: {
    lang_1: "C",
    lang_2: "C++",
  },
};
const { language } = obj_2;
console.log(language);
console.log(language.lang_1);

// destructure function parameters
const func = ({ id, CGPA }) => {
  console.log(id, CGPA);
};

func(obj);
func(obj_2);
