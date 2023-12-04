//api --> application proggrammin interface
//http request codes

//fetch api

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

//get, delete, post, put, patch

// get all data
const BASE_URL = `https://northwind.vercel.app/api`;
function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getAllData("suppliers");
// getAllData("products");
// getAllData("customers");

//get data by id

function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

// getDataById("suppliers", 7);
// getDataById("suppliers", 15);

//delete data by id

function deleteDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// deleteDataById("suppliers", 6);

//add new data

// add new data
function addNewData(endpoint, obj) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// addNewData("suppliers", {
//   companyName: "code edu az",
//   contactName: "GDU",
//   contactTitle: "Frontend WEB development",
// });

// let obj = {
//   companyName: "Code Academy",
//   contactName: "GDU",
//   contactTitle: "Accounting Manager",
//   address: {
//     street: "Bayraq Square",
//     city: "Ste-Hyacinthe",
//     region: "Québec",
//     postalCode: "J2S 7S8",
//     country: "Azerbaijan",
//     phone: "(514) 555-2955",
//   },
// };

// update data by id

function updateDataById(endpoint, id, obj) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// updateDataById("suppliers", 15, {
//   companyName: "Code",
//   address: {
//     street: "DEDE QORQUD 50",
//     city: "Ste-Hyacinthe",
//     region: "Québec",
//     postalCode: "J2S 7S8",
//     country: "Azerbaijan",
//     phone: "(514) 555-2955",
//   },
// });

// update data by id specific fields

function updateDataByIdSpecificFields(endpoint, id, obj) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// updateDataByIdSpecificFields("suppliers", 2, {
//   companyName: "Shalala MMC",
// });

// updateDataByIdSpecificFields("suppliers", 2, {
//   companyName: "Shalala MMC",
//   test: "test",
// });
