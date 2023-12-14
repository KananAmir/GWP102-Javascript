const tBody = document.querySelector("tbody");
const spinner = document.querySelector(".spinner");
const BASE_URL = `https://northwind.vercel.app/api`;
const search = document.querySelector("#search");
const sort = document.querySelector(".sort");

let suppliers = null;
let suppliersCopy = null;

(async () => {
  const res = await axios(`${BASE_URL}/suppliers`);
  suppliers = res.data;
  suppliersCopy = structuredClone(suppliers);
})();

async function getData(endpoint) {
  spinner.classList.add("show");
  let response = await axios(`${BASE_URL}/${endpoint}`);
  //   console.log(response.data);
  drawTable(response.data);
  spinner.classList.remove("show");
}

getData("suppliers");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                <td>${element.id}</td>
                <td>${element.companyName}</td>
                <td>${element.address?.street}</td>
                <td>${element.address?.phone}</td>
                <td>${element.address?.city}, ${element.address?.country}</td>
                <td><a class="btn btn-success" href="suppliers-form.html?id=${element.id}">Edit</a></td>
                <td><button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button></td>
             `;
    tBody.append(trElem);
  });
}

async function deleteSupplier(id, btn) {
  try {
    if (confirm("are u sure to delete??")) {
      let response = await axios.delete(`${BASE_URL}/suppliers/${id}`);

      if (response.status === 200) {
        btn.closest("tr").remove();
        Toastify({
          text: "Deleted Successfully!",
          duration: 3000,
          className: "info",
          close: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
      }
      console.log(response);
    }
  } catch (error) {
    Toastify({
      text: "Supplier not found",
      duration: 3000,
      close: true,
      className: "info",
      style: {
        background: "linear-gradient(to right, red, yellow)",
      },
    }).showToast();
  }
}

//search supplier

// search.addEventListener("input", async function (e) {
//   // console.log(e.target.value);
//   let response = await axios(`${BASE_URL}/suppliers`);
//   let filtered = response.data.filter((item) =>
//     item.companyName
//       .toLocaleLowerCase()
//       .includes(e.target.value.toLocaleLowerCase())
//   );
//   drawTable(filtered);
// });

search.addEventListener("input", function (e) {
  let filtered = suppliers.filter((item) =>
    item.companyName
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(filtered);
});

sort.addEventListener("click", function () {
  let sorted;

  if (this.innerText === "Ascending") {
    sorted = suppliers.sort((a, b) => a.id - b.id);
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = suppliers.sort((a, b) => b.id - a.id);

    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = suppliersCopy;
  }

  drawTable(sorted);
});
