const products = document.querySelector(".products");
const customerBtn = document.querySelector(".customer-btn");
const allInputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const BASE_URL = `https://northwind.vercel.app/api`;
let editStatus = false;
let editId = null;

fetch(`${BASE_URL}/customers`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
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
            <h5 class="card-title">Company Name: <em class="comp">${element.companyName}</em></h5>
            <p class="card-text title">
              ${element.contactTitle}
            </p>
            <p class="card-text">
            Adress:
             <span class="city">${element.address?.city}</span>, <span class="country">${element.address?.country}</span>
            </p>
            <button class="btn btn-success" onclick=editCustomer("${element.id}",this)>Edit</button>
            <button class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>Delete</button>
            <a class="btn btn-primary" href="customer-details.html?id=${element.id}">Details</a>
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

//delete customer
function deleteCustomer(customerId, btn) {
  if (window.confirm("Are u sure to delete customer??")) {
    fetch(`${BASE_URL}/customers/${customerId}`, {
      method: "DELETE",
    });
    //   console.log(btn);
    //   btn.parentElement.parentElement.parentElement.remove();
    btn.closest(".product-info").remove();
  }
}

//post new customer
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

  if (!editStatus) {
    if (
      allInputs[0].value &&
      allInputs[1].value &&
      allInputs[2].value &&
      allInputs[3].value
    ) {
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
    } else {
      alert("fill all inputs!!");
    }
  } else {
    customerBtn.innerText = "Add Customer";
    fetch(`${BASE_URL}/customers/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      fetch(`${BASE_URL}/customers`)
        .then((response) => response.json())
        .then((data) => {
          drawCards(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  editStatus = false;
  allInputs.forEach((item) => (item.value = ""));
});

//edit customer

function editCustomer(id, btn) {
  editStatus = true;
  editId = id;
  customerBtn.innerText = "Edit Customer";
  // fetch(`${BASE_URL}/customers/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     allInputs[0].value = data.companyName;
  //     allInputs[1].value = data.contactTitle;
  //     allInputs[2].value = data.address.city;
  //     allInputs[3].value = data.address.country;
  //   });

  // console.log(btn.closest("div").children[0].textContent);

  allInputs[0].value = btn.closest("div").querySelector(".comp").innerText;
  allInputs[1].value = btn.closest("div").querySelector(".title").innerText;
  allInputs[2].value = btn.closest("div").querySelector(".city").innerText;
  allInputs[3].value = btn.closest("div").querySelector(".country").innerText;
}
