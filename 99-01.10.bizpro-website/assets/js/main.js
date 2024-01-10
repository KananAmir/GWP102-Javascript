const aboutCards = document.querySelector(".about-cards");

let favProducts = getFavsFromLocaleStorage();
let products = [];
async function getAllProducts() {
  try {
    const res = await axios(`${BASE_URL}/products`);
    //   console.log(res.data);
    products = res.data;
    drawCards(res.data);
  } catch (error) {
    console.log(error);
  }
}

getAllProducts();

function drawCards(data) {
  data.forEach((element) => {
    const aboutCardElement = document.createElement("div");
    aboutCardElement.className = "about-card";
    aboutCardElement.innerHTML += `
    <i class="${
      favProducts.some((item) => item.id === element.id)
        ? "fa-solid fa-heart"
        : "fa-regular fa-heart"
    }" onclick="addToFav(${element.id},this)"></i>
    <img
        src="${element.imgUrl}"
        alt=""
    />
    <h2>${element.title}</h2>

    <p>${element.desc}</p>
    <a href="details.html?id=${element.id}">More Details</a>
    <button class="btn btn-danger" onclick="deleteProduct(${
      element.id
    },this)">Delete</button>
    `;

    aboutCards.append(aboutCardElement);
  });
}

async function deleteProduct(id, btn) {
  try {
    if (window.confirm("r u sure to delete??")) {
      await axios.delete(`${BASE_URL}/products/${id}`);
      btn.closest(".about-card").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

function addToFav(id, icon) {
  //   console.log(id);
  if (icon.className === "fa-regular fa-heart") {
    icon.className = "fa-solid fa-heart";
  } else {
    icon.className = "fa-regular fa-heart";
  }

  let favs = getFavsFromLocaleStorage();

  let bool = favs.find((item) => item.id === id);

  let product = products.find((item) => item.id === id);

  if (bool) {
    favs = favs.filter((item) => item.id !== id);
  } else {
    favs.push(product);
  }

  setFavsToLocaleStorage(favs);
}
