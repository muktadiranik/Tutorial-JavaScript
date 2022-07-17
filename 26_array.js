document.write("26_array.js", "<br>");

var arr = new Array(5);
arr = [1, 2, 3, 4, 5];
for (i in arr) {
  document.write(arr[i], " ");
}

document.write("<br>");
document.write(arr);
document.write("<br>");

// push, pop, shift, unshift, splice, slice

arr.push(6);
arr.push(7);

document.write(arr);
document.write("<br>");

for (i in arr) {
  document.write(arr[i], " ");
}
document.write("<br>");

arr.pop();
document.write(arr, " ");
document.write("<br>");

arr.shift();
document.write(arr, " ");
document.write("<br>");

arr.unshift(1);
document.write(arr, " ");
document.write("<br>");

arr.splice(2, 0, "A", "B");
document.write(arr, " ");
document.write("<br>");

arr.splice(2, 2, 2, 2);
document.write(arr, " ");
document.write("<br>");

arr_sliced = arr.slice(2, 4);
document.write(arr_sliced, " ");
document.write("<br>");

// sort
arr_unsorted = ["A", "D", "C", "B"];
document.write(arr_unsorted, " ");
document.write("<br>");

arr_sorted = arr_unsorted.sort();
document.write(arr_sorted, " ");
document.write("<br>");

arr_unsorted_2 = [44, 88, 77, 99, 66, 22, 33, 11, 55];
// ascending order
arr_sorted_2 = arr_unsorted_2.sort(function (a, b) {
  return a - b;
});
document.write(arr_sorted_2, "<br>");

// descending order
arr_sorted_3 = arr_unsorted_2.sort(function (a, b) {
  return b - a;
});
document.write(arr_sorted_3, "<br>");

// concate array
var arr_str_1 = ["a", "b"];
var arr_str_2 = ["c", "d"];
var arr_str_3 = arr_str_1.concat(arr_str_2);
document.write(arr_str_3, " ");

document.write("<br>");

for (var i = 0; i < arr_str_3.length; i++) {
  document.write(arr_str_3[i], " ");
}
document.write("<br>");

var arr_2 = new Array(5);
for (var i = 0; i < arr_2.length; i++) {
  arr_2[i] = i;
}

document.write(arr_2, "<br>");

// 2D array

arr_2d_1 = [
  [1, 2],
  [3, 4],
];
document.write(arr_2d_1, "<br>");

// declaring 2D array
arr_2d_2 = new Array(5);
for (var i = 0; i < arr_2d_2.length; i++) {
  arr_2d_2[i] = new Array(5);
}

for (var i = 0; i < arr_2d_2.length; i++) {
  for (var j = 0; j < arr_2d_2[i].length; j++) {
    arr_2d_2[i][j] = i + j;
  }
}

document.write(arr_2d_2, "<br>");

document.write("<hr>");
