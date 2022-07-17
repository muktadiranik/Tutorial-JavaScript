import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

// synchronus
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// asynchronus
console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
console.log(3);
console.log(4);
console.log(5);

// higher order function and callback function
const squareNum = (num) => {
  console.log(num * num);
};
const higherOrderFunction = (num, callbackFunction) => {
  callbackFunction(num);
};

higherOrderFunction(5, squareNum);

const x = (callback) => {
  console.log("x");
  callback();
};

const y = (callback) => {
  setTimeout(function () {
    console.log("y");
    callback();
  }, 100);
};

const z = () => {
  console.log("z");
};

x(function () {
  y(function () {
    z();
  });
});

x(() => {
  y(() => {
    z();
  });
});
