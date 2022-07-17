function change_paragraph_by_getElementById() {
  var paragraph = document.getElementById("select_HTML_elements_paragraph");
  paragraph.innerHTML = "getElementById";
}

function change_paragraph_by_getElementsByTagName() {
  var paragraph = document.getElementsByTagName("p")[0];
  paragraph.innerHTML = "getElementsByTagName";
}

function change_paragraph_by_getElementsByClassName() {
  var paragraph = document.getElementsByClassName(
    "select_HTML_elements_paragraph"
  )[0];
  paragraph.innerHTML = "getElementsByClassName";
}
