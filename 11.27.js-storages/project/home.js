let wellcome = document.querySelector(".wellcome");

let userName = localStorage.getItem("userName");

wellcome.innerText = `Wellcome ${userName}`;
