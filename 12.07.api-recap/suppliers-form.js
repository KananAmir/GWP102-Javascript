const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");

const BASE_URL = `https://northwind.vercel.app/api`;

const id = new URLSearchParams(window.location.search).get("id");
// console.log(id);

async function fillForm() {
  const res = await axios(`${BASE_URL}/suppliers/${id}`);
  console.log(res.data);

  allInputs[0].value = res.data.companyName;
  allInputs[1].value = res.data.address?.street;
  allInputs[2].value = res.data.address?.phone;
  allInputs[3].value = res.data.address?.city;
  allInputs[4].value = res.data.address?.country;
}

if (id) {
  fillForm();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let supplier = {
    companyName: allInputs[0].value,
    address: {
      street: allInputs[1].value,
      phone: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
    },
  };

  if (!id) {
    addSupplier(supplier);
  } else {
    updateSupplier(supplier);
  }

  allInputs.forEach((item) => (item.value = ""));
});

async function addSupplier(obj) {
  try {
    await axios.post(`${BASE_URL}/suppliers`, obj);
    Toastify({
      text: "Added Successfully!",
      duration: 3000,
      className: "info",
      close: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } catch (error) {
    console.log(error);
  }
}

async function updateSupplier(obj) {
  try {
    await axios.patch(`${BASE_URL}/suppliers/${id}`, obj);
    Toastify({
      text: "Updated Successfully!",
      duration: 3000,
      className: "info",
      close: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } catch (error) {}
}
