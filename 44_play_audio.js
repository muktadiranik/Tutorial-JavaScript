document.querySelector("#make_sound").addEventListener("click", function () {
  var x = document.querySelector("#make_sound_audio");
  x.play();
  alert(this.innerText);
  this.classList.remove("btn-outline-primary");
  this.classList.add("btn-outline-danger");
  this.classList.add("btn-lg");

  setTimeout(function () {
    var this_button = document.querySelector("#make_sound");
    this_button.classList.add("btn-outline-primary");
    this_button.classList.remove("btn-outline-danger");
    this_button.classList.remove("btn-lg");
  }, 1000);
});

var song = document.querySelector("#song_audio");
document
  .querySelector("#play_song_button")
  .addEventListener("click", function () {
    song.play();
    alert(this.innerText);
    this.classList.remove("btn-outline-primary");
    this.classList.add("btn-outline-success");
    this.classList.add("btn-lg");
  });

document
  .querySelector("#pause_song_button")
  .addEventListener("click", function () {
    song.pause();
    alert(this.innerText);
    var play_button = document.querySelector("#play_song_button");
    play_button.classList.add("btn-outline-primary");
    play_button.classList.remove("btn-outline-success");
    play_button.classList.remove("btn-lg");
  });

// keyword listener
var heading = document.querySelector("h1");
var heading_text = document.querySelector("h1").innerText;
document.addEventListener("keypress", function (event) {
  console.log(event.key);
  if (event.key == "p") {
    song.play();
    heading.innerText = "Play Audio";
  }
  if (event.key == "s") {
    song.pause();
    heading.innerText = heading_text;
  }
  if (event.key == "m") {
    var x = document.querySelector("audio");
    x.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key) {
    button_list = document.querySelectorAll("button");
    for (var i in button_list) {
      button_list[i].classList.add("btn-lg");
    }
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key) {
    button_list = document.querySelectorAll("button");
    for (var i in button_list) {
      button_list[i].classList.remove("btn-lg");
    }
  }
});
