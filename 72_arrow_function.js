import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

const display = () => {
  console.log("arrow function");
};
display();

const display_2 = (str) => console.log(str);
display_2("Hello World!");

const display_3 = () => "Hello World!";
console.log(display_3());

const add = (x, y) => x + y;
console.log(add(2, 3));

var obj = [
  {
    name: "Jhon",
    id: 101,
    CGPA: 3.1,
  },
  {
    name: "Steve",
    id: 102,
    CGPA: 2.12,
  },
  {
    name: "Jack",
    id: 103,
    CGPA: 3.86,
  },
  {
    name: "Jane",
    id: 104,
    CGPA: 3.12,
  },
];
console.log(obj);

const obj_filter = obj
  .filter((element) => {
    return element.CGPA > 2.5;
  })
  .map((element) => {
    return element.name;
  });
console.log(obj_filter);

const obj_filter_2 = () =>
  obj.filter((element) => element.CGPA > 2.5).map((element) => element.name);
console.log(obj_filter_2());
