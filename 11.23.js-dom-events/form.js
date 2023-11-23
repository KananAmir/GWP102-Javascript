// -submit
// -change
// -input

let userName = document.querySelector("#username");

//input
// userName.addEventListener("input", function (event) {
//   //   console.log(event);
//   console.log(event.target.value);
// });
//change
// userName.addEventListener("change", function (event) {
//   console.log("change event");
//   //   console.log(event.target.value);
// });

// submit

let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let form = document.getElementById("userForm");
let checkBox = document.getElementById("checkBox");

form.addEventListener("submit", function (event) {
  console.log(checkBox);
  event.preventDefault();

  if (email.value !== "" && password.value !== "") {
    let user = {
      email: email.value,
      password: password.value,
      checked: checkBox.checked,
    };
    console.log(user);
  } else {
    alert("input fields can not be empty");
  }
  //   console.log(event);
  //   console.log(email.value);
  //   console.log(password.value);
});

let firstName = document.querySelector(".first-name");

firstName.addEventListener("focus", function () {
  console.log("focus event worked");
  this.style.backgroundColor = "teal";
  this.style.border = "3px solid red";
});
firstName.addEventListener("blur", function () {
  console.log("blur event worked");
  this.style.backgroundColor = "red";
});
