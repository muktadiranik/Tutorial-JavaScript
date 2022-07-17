document.write("25_IIFE_function.js", "<br>");

let x;
x = function sum(n) {
  if (n == 0) {
    return 0;
  }
  return n + sum(n - 1);
};
var sum = x(10);
document.write(x(10), "<br>");

(function print_pattern(n, diff) {
  if (n == 0 || n < 0) {
    return;
  }
  document.write(n, " ");
  print_pattern(n - diff, diff);
  document.write(n, " ");
})(16, 5);

document.write("<hr>");
