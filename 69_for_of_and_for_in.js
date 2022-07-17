import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

const names = ["Jhon", "Jane", "Smith", "Steve"];
for (let name of names) {
  console.log(name);
}

let obj = {
  name: "Jack",
  id: 1,
  CGPA: 3.0,
};
for (let key in obj) {
  console.log(key, obj[key]);
}
