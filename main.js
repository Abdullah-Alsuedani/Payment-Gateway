let bar = document.querySelector("header .bar");
let bar1 = document.querySelector("header .bar span:first-child");
let bar2 = document.querySelector("header .bar span:nth-child(2)");
let bar3 = document.querySelector("header .bar span:last-child");
let menu = document.querySelector("header .nav");

bar.onclick = function () {
  menu.classList.toggle("active");
  bar1.classList.toggle("first");
  bar2.classList.toggle("mid");
  bar3.classList.toggle("last");
};