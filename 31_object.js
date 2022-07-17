document.write("31_object.js", "<br>");

var obj_1 = {
  name: "John",
  age: 24,
  CGPA: 3.38,
  languages: ["C", "C++", "Java"],
};
document.write(
  obj_1.name,
  ", ",
  obj_1.age,
  ", ",
  obj_1.CGPA,
  ", ",
  obj_1.languages,
  "<br>"
);

// constructor
function Obj(name, age, CGPA, languages) {
  this.name = name;
  this.age = age;
  this.CGPA = CGPA;
  this.languages = languages;

  this.print = function () {
    document.write(
      this.name,
      ", ",
      this.age,
      ", ",
      this.CGPA,
      ", ",
      this.languages,
      "<br>"
    );
  };
}

obj_2 = new Obj("Steve", 26, 2.8, ["Python", "COBOL"]);
obj_3 = new Obj("Rogers", 30, 2.98, ["JavaScript", "C#"]);
document.write(
  obj_3.name,
  ", ",
  obj_3.age,
  ", ",
  obj_3.CGPA,
  ", ",
  obj_3.languages,
  "<br>"
);

obj_2.print();

document.write("<hr>");
