document.getElementById("input_1").addEventListener("change", function (event) {
  document.getElementById("input_1_paragraph").innerText =
    event.target.value + ", " + event.type + ", " + event.target.className;
});

document
  .querySelector("input[name=input_2]")
  .addEventListener("change", function (event) {
    document.querySelector("p[id=input_2_paragraph]").innerText =
      event.target.value +
      ", " +
      event.type +
      ", " +
      event.target +
      ", " +
      event.target.id +
      ", " +
      event.target.placeholder;
    console.log(event.target);
  });

// checkbox
var checkbox_list = document.querySelectorAll("input[name=checkbox_input]");
Array.from(checkbox_list).map((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      document.getElementById("checkbox_input_paragraph").innerText =
        event.target.value;
    }
  });
});
document
  .getElementById("checkbox_button")
  .addEventListener("click", function () {
    var checkbox_status = new Array();
    for (var i in Array.from(checkbox_list)) {
      console.log(checkbox_list[i].checked);
      checkbox_status.push(checkbox_list[i].checked);
    }
    console.log(checkbox_status);
    console.log(String(checkbox_status));
    document.getElementById("checkbox_input_paragraph").innerText =
      String(checkbox_status);
  });

// select input
document
  .querySelector("select[name=select_input]")
  .addEventListener("change", function (event) {
    document.getElementById("select_input_paragraph").innerText =
      event.target.value;
  });

// submit
var form = document.getElementById("form_submit");
var form_input_list = Array.from(
  form.querySelectorAll("input[name=form_input]")
);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var form_value_array = new Array();
  for (var i in form_input_list) {
    form_value_array.push(form_input_list[i].value);
  }
  console.log(form_value_array);
  document.getElementById("form_paragraph").innerText =
    String(form_value_array);

  const form_obj = {
    input_1: form_input_list[0].value,
    input_2: form_input_list[1].value,
  };
  console.log(form_obj);
  form_input_list[0].value = "";
  form_input_list[1].value = "";
});

// media events
const video = document.getElementsByTagName("video")[0];
const paragraph = document.getElementById("video_paragraph");
video.addEventListener("canplay", function () {
  paragraph.innerText = "canplay";
});

video.addEventListener("play", function () {
  paragraph.innerText = "play";
});

video.addEventListener("playing", function () {
  paragraph.innerText = "playing";
});

video.addEventListener("pause", function () {
  paragraph.innerText = "pause";
});

video.addEventListener("ended", function () {
  paragraph.innerText = "ended";
});

video.addEventListener("volumechange", function () {
  paragraph.innerText = "volumechange";
});

video.addEventListener("waiting", function () {
  paragraph.innerText = "waiting";
});

video.addEventListener("progress", function () {
  paragraph.innerText = "progress";
});

// load, unload, resize, scroll, toggle
window.addEventListener("load", function () {
  console.log("load");
});

window.addEventListener("unload", function () {
  console.log("unload");
});

window.addEventListener("scroll", function () {
  console.log("scroll");
});

window.addEventListener("resize", function () {
  const width = this.window.outerHeight;
  const height = this.window.outerWidth;
  console.log(`width: ${width}, height: ${height}`);
});

document
  .getElementsByTagName("details")[0]
  .addEventListener("toggle", function (event) {
    console.log("toggle");
    console.log(event.target.open);
  });

// mouse events
const mouse_event_div_text =
  document.getElementById("mouse_event_div").innerText;

const mouse_event_paragraph = document.getElementById("mouse_event_paragraph");

const mouse_event_paragraph_text = mouse_event_paragraph.innerText;

document
  .getElementById("mouse_event_div")
  .addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.innerText);
    this.innerText = "click";
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("dblclick", function () {
    this.innerText = mouse_event_div_text;
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("mousedown", function () {
    mouse_event_paragraph.classList.add("mouse_event_paragraph");
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("mouseup", function () {
    mouse_event_paragraph.classList.remove("mouse_event_paragraph");
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("mouseenter", function () {
    mouse_event_paragraph.innerText = "mouseenter";
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("mouseleave", function () {
    mouse_event_paragraph.innerText = mouse_event_paragraph_text;
  });

const mouse_event_paragraph_mousemove = document.getElementById(
  "mouse_event_paragraph_mousemove"
);

const mouse_event_paragraph_mousemove_text =
  mouse_event_paragraph_mousemove.innerText;

document
  .getElementById("mouse_event_div")
  .addEventListener("mousemove", function (event) {
    var mouse_position = `${event.clientX}, ${event.clientY}, ${event.offsetX}, ${event.offsetY}`;
    mouse_event_paragraph_mousemove.innerText = mouse_position;
  });

document
  .getElementById("mouse_event_div")
  .addEventListener("mouseout", function () {
    mouse_event_paragraph_mousemove.innerText =
      mouse_event_paragraph_mousemove_text;
  });

// map
const mouse_event_button_group = document.getElementsByName(
  "mouse_event_button_group"
);
Array.from(mouse_event_button_group).map((button) => {
  button.addEventListener("click", function (event) {
    document.getElementById("mouse_event_div").innerText =
      event.target.innerText;
  });
});

// keyboard event
const keyboard_event_div_text =
  document.getElementById("keyboard_event_div").innerText;

document
  .getElementById("keyboard_event_textarea")
  .addEventListener("keypress", function (event) {
    if (event.shiftKey) {
      document.getElementById("keyboard_event_div").innerText =
        event.key + event.shiftKey;
    }
  });

document
  .getElementById("keyboard_event_textarea")
  .addEventListener("keyup", function (event) {
    if (event.shiftKey) {
      document.getElementById("keyboard_event_div").innerText = event.key;
    }
  });

document
  .getElementById("keyboard_event_textarea")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
      document.getElementById("keyboard_event_div").innerText =
        keyboard_event_div_text;
    }
    if (event.altKey) {
      document.getElementById("keyboard_event_div").innerText = "altKey";
    }
    if (event.repeat) {
      document.getElementById("keyboard_event_div").innerText = "repeat";
    }
  });

// focus event
const focus_event_div = document.querySelector("#focus_event_div");
const focus_event_div_text =
  document.querySelector("#focus_event_div").innerText;

document
  .getElementById("focus_event_input")
  .addEventListener("blur", function () {
    focus_event_div.innerText = "blur";
  });

document
  .getElementById("focus_event_input")
  .addEventListener("focus", function () {
    focus_event_div.innerText = "focus";
  });

document
  .getElementById("focus_event_input")
  .addEventListener("focusin", function (event) {
    console.log(event.type);
    focus_event_div.classList.add("focus_event_div");
  });

document
  .getElementById("focus_event_input")
  .addEventListener("focusout", function (event) {
    console.log(event.type);
    focus_event_div.classList.remove("focus_event_div");
    focus_event_div.innerText = event.target.value;

    setTimeout(function () {
      focus_event_div.innerText = "blur";
    }, 1000);
    this.value = event.target.value.toUpperCase();
  });

// clipboard events
const clipboard_event_div = document.querySelector("#clipboard_event_div");
const clipboard_event_paragraph = document.querySelector(
  "#clipboard_event_paragraph"
);

document
  .querySelector("#clipboard_event_textarea")
  .addEventListener("copy", function (event) {
    clipboard_event_div.innerText = "copy";
    console.log(event.target.value);
    clipboard_event_paragraph.innerText = event.target.value;
  });

document
  .querySelector("#clipboard_event_textarea")
  .addEventListener("cut", function (event) {
    clipboard_event_div.innerText = "cut";
    console.log(event.target.value);
    clipboard_event_paragraph.innerText = event.target.value;
  });

document
  .querySelector("#clipboard_event_textarea")
  .addEventListener("paste", function (event) {
    clipboard_event_div.innerText = "paste";
    console.log(event.target.value);
    clipboard_event_paragraph.innerText = event.type;
  });

// drag events
const drag_event_div = document.getElementById("drag_event_div");
const drag_event_paragraph = document.getElementById("drag_event_paragraph");
const drag_event_textarea = document.getElementById("drag_event_textarea");

document
  .getElementById("drag_event_paragraph")
  .addEventListener("dragstart", function (event) {
    console.log(event.type);
    event.dataTransfer.setData("Text", event.target.id);
    console.log(event.target.id);
    drag_event_div.innerText = "dragstart";
  });

drag_event_div.addEventListener("dragover", function (event) {
  console.log(event.type);
  event.preventDefault();
});

drag_event_div.addEventListener("drop", function (event) {
  console.log(event.type);
  var id = event.dataTransfer.getData("Text");
  this.appendChild(document.getElementById(id));
  drag_event_textarea.value = document.getElementById(id).innerText;
});

drag_event_textarea.addEventListener("dragenter", function (event) {
  var id = event.dataTransfer.getData("Text");
  console.log(event.type);
  event.target.value = "dragenter";
});

drag_event_textarea.addEventListener("dragleave", function (event) {
  console.log(event.type);
  event.target.value = "dragleave";
  setTimeout(function () {
    drag_event_textarea.value = "";
  }, 1000);
});

document.addEventListener("dragend", function (event) {
  drag_event_textarea.value = "dragend";
  console.log(event.type);
  setTimeout(function () {
    drag_event_textarea.value = "";
  }, 1000);
});
