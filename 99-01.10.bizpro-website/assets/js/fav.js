const aboutCards = document.querySelector(".about-cards");

let favProducts = getFavsFromLocaleStorage();

function drawCards(data) {
  data.forEach((element) => {
    const aboutCardElement = document.createElement("div");
    aboutCardElement.className = "about-card";
    aboutCardElement.innerHTML += `
    <i class="fa-solid fa-heart" onclick="removeFromFavs(${element.id},this)"></i>
    <img
        src="${element.imgUrl}"
        alt=""
    />
    <h2>${element.title}</h2>

    <p>${element.desc}</p>
    <a href="details.html?id=${element.id}">More Details</a>
  
    `;

    aboutCards.append(aboutCardElement);
  });
}

drawCards(favProducts);

function removeFromFavs(id, btn) {
  favProducts = favProducts.filter((item) => item.id !== id);
  setFavsToLocaleStorage(favProducts);

  btn.closest(".about-card").remove();
}
