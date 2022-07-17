// <script src="77_ES6_module_and_class.js" type="module"></script>

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

import { anotherString, str } from "./77_module.js";
console.log(str);
console.log(anotherString);

import { convertToUpperCase } from "./77_module.js";
convertToUpperCase(str);

import { addNumbers as add } from "./77_module.js";
console.log(add(1, 2, 3, 4, 5));

class ClassObj {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  set ClassObjName(name) {
    this.name = name;
  }

  get classObjId() {
    return this.id;
  }
}

let obj1 = new ClassObj(101, "Jhon");
console.log(obj1);

obj1.ClassObjName = "Steve";
console.log(obj1);

console.log(obj1.classObjId);
