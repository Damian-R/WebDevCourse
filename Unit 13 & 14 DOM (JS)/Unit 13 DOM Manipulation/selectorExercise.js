// 4 different ways to select the first <p> element
var p1 = document.querySelector("p");
var p2 = document.getElementById("first");
var p3 = document.getElementsByClassName("special")[0];
var p4 = document.getElementsByTagName("p")[0];
// bonus
var p5 = document.querySelector(".special");
var p6 = document.querySelector("#first");
var p7 = document.querySelectorAll(".special")[0];
var p8 = document.querySelectorAll("p")[0];