// npm install prompt-sync
const prompt = require("prompt-sync")();
const var_1 = prompt("var_1: ");
const var_2 = prompt("var_2: ");

try {
  console.log("try");
  if (var_1 <= 0) {
    throw "var_1 <= 0";
  }
  if (var_2 >= 5) {
    throw "var_2 >= 5";
  }
  console.log(var_1 / var_2);
} catch (error) {
  console.log("catch");
  console.log(error);
} finally {
  console.log("finally");
  console.log(`var_1: ${var_1}, var_2: ${var_2}`);
}
