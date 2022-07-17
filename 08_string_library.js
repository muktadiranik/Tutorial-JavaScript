document.write("08_string_library.js", "<br>");

var len_str_1 = str_1.length;

document.write(str_1, ", length: ", len_str_1, "<br>");

// prompt function
// var input_1 = prompt("input_1");
// document.write(input_1, ", length: ", input_1.length, "<br>");

document.write(str_1, ", charAt(6): ", str_1.charAt(6), "<br>");

document.write(str_1, ", toUpperCase(): ", str_1.toUpperCase(), "<br>");
var str_uppercase = "THIS IS A UPPERCASE STRING";
document.write(
  str_uppercase,
  ", toLowerCase(): ",
  str_uppercase.toLowerCase(),
  "<br>"
);

document.write(str_1, " + ", str_2, " = ", str_1.concat(str_2), "<br>");

var str_sliced = str_1.slice(0, 4);
document.write(str_1, ", sliced(0, 4): ", str_sliced, "<br>");

document.write("<hr>");
