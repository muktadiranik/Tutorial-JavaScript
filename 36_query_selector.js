function querySelector_TagName() {
  var paragraph = document.querySelectorAll("div p")[0];
  paragraph.innerHTML = "querySelector_TagName";
}

function querySelector_ClassName() {
  var paragraph = document.querySelectorAll("div .querySelector_paragraph")[0];
  paragraph.innerHTML = "querySelector_ClassName";
}

function querySelector_Id() {
  var paragraph = document.querySelector("div #querySelector_paragraph");
  paragraph.innerHTML = "querySelector_Id";
}
