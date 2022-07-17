document.write("06_number_function.js", "<br>");
var a = 20;
var b = "this is another string";

document.write(a, ", ", typeof a, "<br>");
document.writeln(b, ", ", typeof b, "<br>");

var c = 22.446688;
document.write(c, ", ", typeof c, "<br>");

var d = parseInt(c);

document.write(d, ", ", typeof d, "<br>");

document.write(
  c,
  ", toFixed(6): ",
  c.toFixed(6),
  ", ",
  typeof c.toFixed(6),
  "<br>"
);
document.write(
  c,
  ", toPrecision(6): ",
  c.toPrecision(6),
  ", ",
  typeof c.toPrecision(6),
  "<br>"
);

var e = "22448866";
document.write(
  e,
  ", ",
  typeof e,
  ", ",
  Number(e),
  ", ",
  typeof Number(e),
  "<br>"
);

document.write("<hr>");
