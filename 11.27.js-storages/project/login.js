let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //   let user = {
  //     userName: allInputs[0].value,
  //     password: allInputs[1].value,
  //   };

  let user = users.find(
    (item) =>
      item.userName === allInputs[0].value &&
      item.password === allInputs[1].value
  );

  if (user) {
    localStorage.setItem("userName", user.userName);
    window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }

  allInputs.forEach((item) => {
    item.value = "";
  });
});
