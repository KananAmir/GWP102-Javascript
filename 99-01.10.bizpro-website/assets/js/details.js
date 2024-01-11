const id=new URLSearchParams(window.location.search).get("id")
console.log(id);
const details=document.querySelector(".details")

async function getData(){
    const res= await axios (`${BASE_URL}/products/${id}`)
    console.log(res.data);
    drawCard(res.data)
}
getData()

function drawCard(data){
 const detCard=document.createElement("div")
 detCard.className="details-card"

 detCard.innerHTML=`
 <div class="image">
 <img src="${data.imgUrl}" alt="">
</div>
<div class="details-info">
 <h1>${data.title}</h1>
 <p>${data.desc}</p>
 <button class="go-back" onclick="goBack()">Go Back</button>

 </div>
 `
details.append(detCard)


}

function goBack(){
    window.history.back()
}