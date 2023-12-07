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
    axios.post(`${BASE_URL}/suppliers`, supplier);
  } else {
    axios.patch(`${BASE_URL}/suppliers/${id}`, supplier);
  }

  allInputs.forEach((item) => (item.value = ""));
});
