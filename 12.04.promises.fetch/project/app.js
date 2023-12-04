const products = document.querySelector(".products");
const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const BASE_URL = `https://northwind.vercel.app/api`;

fetch(`${BASE_URL}/customers`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data);
  })
  .catch((err) => {
    console.log(err);
  });

function drawCards(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    products.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 mb-4 product-info">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Company Name: <em>${element.companyName}</em></h5>
            <p class="card-text">
              ${element.contactTitle}
            </p>
            <p class="card-text">
            Adress:
              ${element.address?.city}, ${element.address?.country}
            </p>
            <button class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>Delete</button>
          </div>
        </div>
      </div>
        `;
  });
}

// function deleteCustomer(customerId) {
//   //   console.log(customerId);
//   fetch(`${BASE_URL}/customers/${customerId}`, {
//     method: "DELETE",
//   }).then(() => {
//     fetch(`${BASE_URL}/customers`)
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         drawCards(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// }

function deleteCustomer(customerId, btn) {
  fetch(`${BASE_URL}/customers/${customerId}`, {
    method: "DELETE",
  });
  //   console.log(btn);
  //   btn.parentElement.parentElement.parentElement.remove();
  btn.closest(".product-info").remove();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    companyName: allInputs[0].value,
    contactTitle: allInputs[1].value,
    address: {
      city: allInputs[2].value,
      country: allInputs[3].value,
    },
  };

  //   console.log(obj);

  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`${BASE_URL}/customers`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        drawCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  allInputs.forEach((item) => (item.value = ""));
});
