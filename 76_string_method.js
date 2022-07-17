import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

let str = "this is a string";
// case sensitive
console.log(str.startsWith("this"));
console.log(str.startsWith("is"));

console.log(str.endsWith("string"));
console.log(str.endsWith("is"));

console.log(str.includes("a"));
console.log(str.includes("A"));
