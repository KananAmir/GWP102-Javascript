//The scroll, onload and onunload Events
//load
// window.addEventListener("load", function () {
//   console.log("home page, load event worked");
// });

// window.addEventListener("DOMContentLoaded", function () {
//   console.log("home page, DOMContentLoaded event worked");
// });

// window.addEventListener("unload", function () {
//   console.log("home page, unload event worked");
// });

let header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   //   console.log("scroll event");
//   //   console.log(window.scrollY);
//   window.scrollY > 0
//     ? header.classList.add("header-scroll")
//     : header.classList.remove("header-scroll");
// });

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
