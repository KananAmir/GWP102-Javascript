const BASE_URL = `http://localhost:8080`;
const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const loadMore = document.querySelector(".load-more button");

let productdCopy = [];
let limit = 3;
favCount.style.color = "red";
favCount.style.fontSize = "1.2rem";
let favorites = getFavoritesFromLocaleStorages();
calculateFavCount(favorites.length);

async function getProducts() {
  const response = await axios(`${BASE_URL}/products`);
  //   console.log(response.data);
  productdCopy = response.data;
  drawCards(response.data.slice(0, limit));
}

getProducts();

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

    const bool = favorites.find((item) => item.id === element.id);

    favIconElement.className = !bool
      ? "fa-regular fa-heart"
      : "fa-solid fa-heart";

    const productPriceElement = document.createElement("span");
    productPriceElement.textContent = element.price;

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = element.description;
    const productImageElement = document.createElement("img");
    productImageElement.src = element.imageUrl;

    const raiting = document.createElement("span");
    console.log(element);
    raiting.innerHTML = createProductRating(element.raiting);

    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");

      console.log(element);

      let favoriteProducts = getFavoritesFromLocaleStorages();

      const favIndex = favoriteProducts.findIndex(
        (item) => item.id === element.id
      );

      if (favIndex === -1) {
        favoriteProducts.push(element);
      } else {
        favoriteProducts.splice(favIndex, 1);
      }

      setProductToLocaleStorage(favoriteProducts);
      calculateFavCount(favoriteProducts.length);
    });

    productTitleDivElement.append(productTitleElement, favIconElement);
    productCardElement.append(
      productTitleDivElement,
      productPriceElement,
      productDescriptionElement,
      raiting,
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

function calculateFavCount(count) {
  favCount.textContent = count;
}

// loadMore.addEventListener("click", function () {
//   limit += 3;
//   getProducts();
// });

loadMore.addEventListener("click", function () {
  limit += 3;
  drawCards(productdCopy.slice(0, limit));

  if (limit >= productdCopy.length) {
    this.remove();
  }
});

function createProductRating(count) {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="124"
    height="16"
    viewBox="0 0 124 16"
    fill="none"
  >
    <path
      d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z"
      fill="${count > 0 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z"
      fill="${count > 1 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z"
      fill="${count > 2 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z"
      fill="${count > 3 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z"
      fill="${count > 4 ? "#FFC600" : "#C1C8CE"}"
    />
  </svg>
  `;
}
