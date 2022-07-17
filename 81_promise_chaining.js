import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

const a = () => {
  return new Promise((resolve, reject) => {
    resolve("a resolve");
  });
};

const b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("b resolve");
    }, 200);
  });
};

const c = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("c resolve");
    } else {
      reject("c reject");
    }
  });
};

const d = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("d resolve");
    } else {
      reject("d reject");
    }
  });
};

a()
  .then((response) => console.log(response))
  .then(b)
  .then((response) => console.log(response))
  .then(() => c(false))
  .then((response) => console.log(response))
  .then(() => d(true))
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
