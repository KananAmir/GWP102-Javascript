let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = `https://northwind.vercel.app/api`;

const details = document.querySelector(".details");
console.log(id);

fetch(`${BASE_URL}/customers/${id}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    details.innerHTML = `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title"><em>Company Name:</em> ${data.companyName}</h5>
        <h5 class="card-title"><em>Contact Tittle:</em> ${data.contactTitle}</h5>
        <p class="card-text">
         Adress: ${data.address?.street}, ${data.address?.city}, ${data.address?.country}
        </p>
        <a href="#" class="btn btn-primary" onclick=goBack()>Go Back</a>
      </div>
    </div>
  </div>
    `;
  });

function goBack() {
  window.history.back();
}
