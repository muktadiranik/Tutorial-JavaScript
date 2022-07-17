import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

const return_obj = (id, name) => {
  return {
    id: id,
    name: name,
  };
};

console.log(return_obj(1, "Jhon"));

const return_obj_ES6 = (id, name) => {
  return {
    id,
    name,
  };
};

console.log(return_obj_ES6(1, "Steve"));

// function in object
let obj = {
  obj_func: function () {
    return "object function";
  },
};
console.log(obj.obj_func());

let obj_ES6 = {
  "obj func ES6"() {
    return "object function ES6";
  },
};
console.log(obj_ES6["obj func ES6"]());
