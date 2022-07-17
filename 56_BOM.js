// location
var location_div = document.querySelector("#location_div");

location_div.children[0].innerText = location.href;
location_div.children[1].innerHTML = location.protocol;
location_div.children[2].innerHTML = location.hostname;
location_div.children[3].innerHTML = location.port;
location_div.children[4].innerHTML = location.pathname;

document.getElementById("visit_youtube").addEventListener("click", () => {
  location.assign("https://www.youtube.com");
});

// popup boxes
document.getElementById("alert_button").addEventListener("click", () => {
  alert("alert");
});

var popup_div = document.getElementById("popup_div");

document.getElementById("confirm_button").addEventListener("click", () => {
  var x = confirm("confirm");
  console.log(x);
  var p = document.createElement("p");
  var p_text = document.createTextNode(String(x));
  p.appendChild(p_text);
  popup_div.appendChild(p);
});

document.getElementById("prompt_button").addEventListener("click", () => {
  var x = prompt("prompt");
  console.log(x);
  var p = document.createElement("p");
  var p_text = document.createTextNode(String(x));
  p.appendChild(p_text);
  popup_div.appendChild(p);
});

// timing events
let setTimeout_p = document.getElementById("setTimeout_p");
let setInterval_p = document.getElementById("setInterval_p");

let setTimeout_button = document.getElementById("setTimeout_button");
let setInterval_button = document.getElementById("setInterval_button");
let clearInterval_button = document.getElementById("clearInterval_button");
let start_clock_button = document.getElementById("start_clock_button");

setTimeout_button.addEventListener("click", () => {
  const curr_text = setTimeout_p.textContent;
  setTimeout_p.textContent = "setTimeout";
  setTimeout(() => {
    setTimeout_p.textContent = curr_text;
  }, 2000);
});

setInterval_button.addEventListener("click", () => {
  let count = 0;
  setInterval_p.textContent = count;
  setInterval(() => {
    count++;
    setInterval_p.textContent = count;
  }, 1000);
});

function sample_clock() {
  var date = new Date();
  document.getElementById("sample_clock_p").innerText = date;
}

function sample_clock_milliseconds() {
  var date = new Date();
  var formatted_time = format_time(date);

  document.getElementById("sample_clock_milliseconds_p").textContent =
    formatted_time;
}

function format_time(date) {
  var hours = date.getHours();
  if (hours < 10) {
    hours = String("0") + String(hours);
  }

  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = String("0") + String(minutes);
  }

  var seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = String("0") + String(seconds);
  }

  var milliseconds = date.getMilliseconds();
  if (milliseconds < 10) {
    milliseconds = String("000") + String(milliseconds);
  } else if (milliseconds < 100) {
    milliseconds = String("00") + String(milliseconds);
  } else if (milliseconds < 1000) {
    milliseconds = String("0") + String(milliseconds);
  }

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

window.addEventListener("load", () => {
  sample_clock();
  sample_clock_milliseconds();
});

var sample_interval;
var sample_interval_milliseconds;

start_clock_button.addEventListener("click", () => {
  sample_interval = setInterval(sample_clock, 1000);
  sample_interval_milliseconds = setInterval(sample_clock_milliseconds, 1);
});

clearInterval_button.addEventListener("click", () => {
  clearInterval(sample_interval);
  clearInterval(sample_interval_milliseconds);
});
