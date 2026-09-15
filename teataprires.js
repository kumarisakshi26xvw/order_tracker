let menuItems=JSON.parse(localStorage.getItem("menuItems")) || [];
const itemName = document.getElementById("itemName");
const itemImage = document.getElementById("itemImage");
const itemPrice = document.getElementById("itemPrice");
const addItem = document.getElementById("addItem");
addItem.addEventListener("click", () => {
    const newItem = {
        name: itemName.value,
        image: itemImage.value,
        price: itemPrice.value
    };

    menuItems.push(newItem);

    localStorage.setItem("menuItems", JSON.stringify(menuItems));
});
const restaurantItems = document.getElementById("restaurantItems");

function displayRestaurantItems() {
    restaurantItems.innerHTML = "";

    menuItems.forEach((item, index) => {
        restaurantItems.innerHTML += `
            <div class="restaurant-item">
                <span>${item.name} - Rs. ${item.price}</span>
                <button onclick="deleteItem(${index})">DELETE</button>
            </div>
        `;
    });
}

function deleteItem(index) {
    menuItems.splice(index, 1);

    localStorage.setItem("menuItems", JSON.stringify(menuItems));

    displayRestaurantItems();
}

displayRestaurantItems();
const savedPrices = JSON.parse(localStorage.getItem("teaPrices")) || {};

document.querySelectorAll(".tea-card").forEach(card => {

    const name = card.querySelector("h2").textContent.trim().toLowerCase();

    const price = savedPrices[name];

    if (price !== undefined) {
        card.querySelector("p").textContent = "Rs. " + price;
    }
});
const savePrices = document.getElementById("savePrices");

savePrices.addEventListener("click", () => {

    const prices = {};

    document.querySelectorAll(".tea-item").forEach(item => {

        const name = item.querySelector("span").textContent.trim();
        const price = item.querySelector("input").value;

        prices[name.toLowerCase()] = price;
    });

    localStorage.setItem("teaPrices", JSON.stringify(prices));

    alert("Prices updated!");
});