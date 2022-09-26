function myf() {
  alert("Hello, world!");
  document.getElementById("Text").style.fontSize = "24pt";
}

function fancy() {
  alert("You are fancy!");
  document.getElementById("Text").style.fontWeight = "bold";
  document.getElementById("Text").style.color = "blue";
  document.getElementById("Text").style.textDecoration = "underline";
}

function boring() {
  document.getElementById("Text").style.fontWeight = "normal";
  document.getElementById("Text").style.color = "black";
  document.getElementById("Text").style.textDecoration = "initial";
}

function addMoo() {
  let str = document.getElementById("Text").innerHTML.toUpperCase();
  document.getElementById("Text").innerHTML = str;
  let parts = str.split(".");
  let newStr = parts.join("-Moo");
  document.getElementById("Text").innerHTML = newStr;
}
