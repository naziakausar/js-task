var myinput = document.getElementById("psw");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("upercase");
var number = document.getElementById("number");
var length = document.getElementById("length");
myinput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
myinput.onblur = function () {
  document.getElementById("message").style.display = "none";
};
// valid when lowercase
myinput.onkeyup = function () {
  var LowerCaseLetters = /[a-z]/g;
  if (myinput.Value.match(LowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // valid when uppercase

  var uperCaseLetters = /[A-Z]/g;
  if (myinput.Value.match(uperCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //valid when numbers
  var uperCaseLetters = /[0-9]/g;
  if (myinput.Value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  //valid when length

  if (myinput.Value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    letter.classList.add("invalid");
  }
};
