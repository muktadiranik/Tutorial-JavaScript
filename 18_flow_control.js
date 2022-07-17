document.write("18_flow_control.js", "<br>");

document.write("for loop", "<br>");
for (var i = 0; i <= 5; i++) {
  document.write(i, " ");
}

document.write("<br>", "while loop", "<br>");
var i = 0;
while (i <= 5) {
  document.write(i, " ");
  i++;
}

document.write("<br>", "do while loop", "<br>");
var i = 0;
do {
  document.write(i, " ");
  i++;
} while (i <= 5);

document.write("<br>", "break continue", "<br>");
var i = 0;
while (true) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  document.write(i, " ");
  if (i >= 5) {
    break;
  }
}

document.write("<hr>");
