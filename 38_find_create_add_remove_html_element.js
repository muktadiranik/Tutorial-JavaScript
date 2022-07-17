function change_html_element() {
  var paragraph = document.querySelectorAll(".find_create_add_remove_div p")[0];
  paragraph.innerHTML = "innerHTML";
  paragraph.style.fontSize = "2rem";
  paragraph.style.color = "blue";
}

function unchange_html_element() {
  var paragraph = document.querySelectorAll(".find_create_add_remove_div p")[0];
  paragraph.innerText = "innerText";
  paragraph.style.fontSize = "1rem";
  paragraph.style.color = "black";
}

function create_element() {
  var paragraph = document.createElement("p");
  var text = document.createTextNode("this is a paragraph");
  paragraph.appendChild(text);
  div = document.getElementById("find_create_add_remove_div");
  div.appendChild(paragraph);
}

function remove_element() {
  var paragraph = document.querySelectorAll(".find_create_add_remove_div p")[0];
  var div = document.getElementById("find_create_add_remove_div");
  div.removeChild(paragraph);
}

function create_element_insertBefore() {
  var paragraph = document.createElement("p");
  var text = document.createTextNode("this is a new paragraph");
  paragraph.appendChild(text);
  var div = document.getElementById("find_create_add_remove_div");
  var old_paragraph = document.querySelectorAll(
    "#find_create_add_remove_div #find_create_add_remove_div_p"
  )[0];
  div.insertBefore(paragraph, old_paragraph);
}

function add_to_ClassList() {
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[0];
  paragraph.classList.add("paragraph_brown");
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[1];
  paragraph.classList.add("paragraph_peru");
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[2];
  paragraph.classList.add("paragraph_gray");

  var div = document.querySelector("#find_create_add_remove_div");
  div.classList.add("div_background_color");
}

function remove_from_ClassList() {
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[0];
  paragraph.classList.remove("paragraph_brown");
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[1];
  paragraph.classList.remove("paragraph_peru");
  var paragraph = document.querySelectorAll(".find_create_add_remove_div_p")[2];
  paragraph.classList.remove("paragraph_gray");

  var div = document.querySelector("#find_create_add_remove_div");
  div.classList.remove("div_background_color");
}

function traverse_DOM() {
  // downwards
  const list_class = document.querySelector(".traversing_DOM_list");
  const list_1 = list_class.querySelector("#traversing_DOM_list_li");
  const list_2 = list_class.children[1];
  const list_3 = list_class.children[2];

  var paragraph = document.createElement("p");
  var text = document.createTextNode(
    list_1.innerText + list_2.innerText + list_3.innerText
  );
  paragraph.appendChild(text);

  var div = document.getElementsByClassName("traversing_DOM_div")[0];
  div.appendChild(paragraph);

  // upwards
  const child_list = document.querySelector("li");
  const parent_list = child_list.parentElement;

  var new_list = document.createElement("li");
  var new_list_text = document.createTextNode("list 4");
  new_list.appendChild(new_list_text);
  parent_list.appendChild(new_list);

  // sideways
  const sibling_list = document.querySelectorAll("li")[1];
  const next_sibling_list = sibling_list.nextElementSibling;
  const previous_sibling_list = sibling_list.previousElementSibling;

  var new_sibling_list = document.createElement("li");
  var new_sibling_list_text = document.createTextNode(
    next_sibling_list.innerText + previous_sibling_list.innerText
  );
  new_sibling_list.appendChild(new_sibling_list_text);
  parent_list.appendChild(new_sibling_list);
}

// event listener
document.querySelector("h2").addEventListener("click", function () {
  this.innerText = "event listened";
});

document.querySelector("h2").addEventListener("mouseenter", function () {
  this.classList.add("h2");
});

document.querySelector("h2").addEventListener("mouseleave", function () {
  this.classList.remove("h2");
});

var button_list = document.querySelectorAll("#event_listener_button");
for (var i in button_list) {
  document
    .querySelectorAll("#event_listener_button")
    [i].addEventListener("click", function () {
      document.querySelector("h2").innerText = this.innerText;
    });
}
