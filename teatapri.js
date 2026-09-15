const teaCards = document.querySelectorAll(".tea-card");

teaCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selected");
    });
});
const place= document.querySelector(".buttons button");
if (place){place.addEventListener("click",()=> {
    
const selectedCards= document.querySelectorAll(".tea-card.selected");
const cartItems=[];
selectedCards.forEach(card =>{
    const name=card.querySelector("h2").innerText;
    const price= card.querySelector("p").innerText;
    cartItems.push({name:name,price:price});
})
localStorage.setItem("cartItems",JSON.stringify(cartItems));
alert(cartItems.length);
if (cartItems.length>0){
window.location.href="cart.html";}
})
}
const newItems = document.getElementById("newItems");

const menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];

menuItems.forEach(item => {
    newItems.innerHTML += `
        <div class="tea-card">
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Rs. ${item.price}</p>
        </div>
    `;
});
const savedPrices = JSON.parse(localStorage.getItem("teaPrices")) || {};

document.querySelectorAll(".tea-card").forEach(card => {

    const name = card.querySelector("h2").textContent.trim().toLowerCase();

    const price = savedPrices[name];

    if (price !== undefined) {
        const paragraphs = card.querySelectorAll("p");
        paragraphs[0].textContent = "Rs. " + price;
    }
});