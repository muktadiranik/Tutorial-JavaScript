var canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#canvas")
);
var context = canvas.getContext("2d");

// reactangle
context.lineWidth = 5;
context.strokeStyle = "black";
context.strokeRect(0, 0, 400, 200);

context.fillStyle = "green";
context.fillRect(5, 5, 390, 190);

// radius for circle
var center_X = canvas.width / 2;
var center_Y = canvas.height / 2;

// draw circle
context.beginPath();
context.arc(center_X, center_Y, 60, 0, 2 * Math.PI, false);
context.fillStyle = "red";
context.fill();
context.stroke();
