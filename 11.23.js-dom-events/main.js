let clickMe = document.querySelector(".click-me");
let box = document.querySelector(".box");
let secondBox = document.querySelector(".second-box");
//click
clickMe.addEventListener("click", function () {
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "teal";
  box.style.marginTop = "20px";
});
//contextmenu
clickMe.addEventListener("contextmenu", function () {
  console.log("contextmenu event worked");
});
//mousedown
secondBox.addEventListener("mousedown", function () {
  console.log("mouesedown");
});
//moueseup
secondBox.addEventListener("mouseup", function () {
  console.log("moueseup");
});
// -mouseover
// secondBox.addEventListener("mouseover", function () {
//   console.log("moueseover");
// });
// -mouseenter
// secondBox.addEventListener("mouseenter", function () {
//   console.log("moueseenter");
// });
// -mousemove
// secondBox.addEventListener("mousemove", function () {
//   console.log("mouesemove");
// });

// -mouseout
secondBox.addEventListener("mouseout", function (event) {
  console.log("moueseout");
  console.log(event);
});

//keyboard events
let userName = document.querySelector("#username");
// -keyup
userName.addEventListener("keyup", function (e) {
  //   console.log(e.target.value);
  //   console.log("keyup worked");
});
// -keydown
// userName.addEventListener("keydown", function (e) {
//   //   console.log(e.target.value);
//   console.log("keydown worked");
// });

let alpha = 0;
window.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (event.code === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  } else if (event.code === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  }

  document.body.style.backgroundColor = `rgba(0,0,0,${alpha})`;
  //   console.log(event.code);
});
