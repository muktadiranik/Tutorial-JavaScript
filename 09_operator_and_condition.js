document.write("09_operator_and_condition.js", "<br>");

document.write("if else", "<br>");
var a = "24";
var a = parseInt(a);
if (a % 2 == 0) {
  document.write(a, " is even", "<br>");
} else {
  document.write(a, " is odd", "<br>");
}
document.write("switch", "<br>");
var a = 5;
switch (true) {
  case a % 2 == 0:
    document.write(a, " is even", "<br>");
    break;
  case a % 2 != 0:
    document.write(a, " is odd", "<br>");
    break;
  default:
    document.write("not a number", "<br>");
}

document.write("ternary operator", "<br>");
var a = 10;
document.write(a % 2 == 0 ? "even" : "odd");
document.write("<br>");

for (i = 0; i < 10; i++) {
  document.write(i, ", ", i % 2 == 0 ? "i % 2" : i % 3 == 0 ? "i % 3" : i);
  document.write("<br>");
}
document.write("<hr>");
