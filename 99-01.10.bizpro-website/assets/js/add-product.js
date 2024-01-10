const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const errorMessage = document.querySelector(".error");
const BASE_URL = `http://localhost:8080`;

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    if (
      allInputs[0].value.trim() &&
      allInputs[1].value.trim() &&
      allInputs[2].value.trim()
    ) {
      let product = {
        title: allInputs[0].value,
        imgUrl: allInputs[1].value,
        desc: allInputs[2].value,
      };
      await axios.post(`${BASE_URL}/products`, product);
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
});
