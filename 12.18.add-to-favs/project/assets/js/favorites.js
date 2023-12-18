const BASE_URL = `http://localhost:8080`;
const products = document.querySelector(".products");

let favorites = getFavoritesFromLocaleStorages();

drawCards(favorites);

function drawCards(data) {
  products.innerHTML = "";

  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "card";
    const productTitleDivElement = document.createElement("div");
    productTitleDivElement.className = "title-cont";

    const productTitleElement = document.createElement("h3");
    productTitleElement.textContent = element.title;
    const favIconElement = document.createElement("i");

    favIconElement.className = "fa-solid fa-heart";

    const productPriceElement = document.createElement("span");
    productPriceElement.textContent = element.price;

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = element.description;
    const productImageElement = document.createElement("img");
    productImageElement.src = element.imageUrl;

    favIconElement.addEventListener("click", function () {
      favorites = favorites.filter((item) => item.id !== element.id);
      setProductToLocaleStorage(favorites);
      productCardElement.remove();
    });

    productTitleDivElement.append(productTitleElement, favIconElement);
    productCardElement.append(
      productTitleDivElement,
      productPriceElement,
      productDescriptionElement,
      productImageElement
    );

    products.append(productCardElement);
  });
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorages() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}
