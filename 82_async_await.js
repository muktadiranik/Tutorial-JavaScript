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

const all = async function () {
  try {
    const taskA = await a();
    console.log(taskA);
    const taskB = await b();
    console.log(taskB);
    const taskC = await c(true);
    console.log(taskC);
    const taskD = await d(true);
    console.log(taskD);
  } catch (error) {
    console.log(error);
  }
};
all();

const x = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(true);
      console.log("x resolve");
    } else {
      reject(false);
      console.log("x reject");
    }
  });
};

const y = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(true);
      console.log("y resolve");
    } else {
      reject(false);
      console.log("y reject");
    }
  });
};

const z = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(true);
      console.log("z resolve");
    } else {
      reject(false);
      console.log("z reject");
    }
  });
};

const callAllFunction = async () => {
  try {
    const X = await x(true);
    const Y = await y(X);
    const Z = await z(!Y);
  } catch (error) {
    console.log(error);
  }
};
callAllFunction();
