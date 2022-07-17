import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// npm install prompt-sync
const prompt = require("prompt-sync")();

// promise --> pending, resolve -> then(), reject -> catch()
const promise = new Promise((resolve, reject) => {
  let promiseComplete = false;
  if (promiseComplete) {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});

const truePromise = new Promise((resolve, reject) => {
  resolve("true promise resolve");
});

const anotherTruePromise = new Promise((resolve, reject) => {
  resolve("another true promise resolve");
});

console.log(promise);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all([truePromise, anotherTruePromise]).then((response) => {
  console.log(response);
});

Promise.all([truePromise, anotherTruePromise]).then(
  ([response1, response2]) => {
    console.log(response1);
    console.log(response2);
  }
);

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 resolve");
  }, 100);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 4 resolve");
  }, 200);
});

Promise.race([promise3, promise4]).then((response) => {
  console.log(response);
});
