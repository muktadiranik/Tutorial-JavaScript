export let str = "this is a string";

let text = "this is a text";
export { text as anotherString };

export const convertToUpperCase = (str) => {
  console.log(str.toUpperCase());
};

export const addNumbers = (a, ...z) => {
  let sum = 0;
  sum = sum + parseInt(a);
  for (let i of z) {
    sum = sum + parseInt(i);
  }
  return sum;
};
