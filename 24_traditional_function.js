document.write("traditional function", "<br>");

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
document.write(factorial(5), "<br>");

function pattern(n) {
  if (n == 0) {
    document.write(n, " ");
    return;
  }
  document.write(n, " ");
  pattern(n - 1);
  document.write(n, " ");
}
document.write(pattern(5), "<br>");

document.write("<hr>");
