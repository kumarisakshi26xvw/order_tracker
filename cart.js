const cart = document.getElementById("cart");

const items = JSON.parse(localStorage.getItem("cartItems")) || [];

const savedPrices = JSON.parse(localStorage.getItem("teaPrices")) || {};

let total = 0;

items.forEach(item => {

    const name = item.name.trim().toLowerCase();

    let currentPrice = savedPrices[name];

    if (currentPrice === undefined) {
        currentPrice = parseInt(item.price.replace("Rs.", ""));
    }

    currentPrice = parseInt(currentPrice);

    cart.innerHTML += `
        <div class="cart-item">
            <h2>${item.name}</h2>
            <h2>Rs. ${currentPrice}</h2>
            <h2>Quantity: 1</h2>
        </div>
    `;

    total += currentPrice;
});

cart.innerHTML += `
    <div>
        <h2>TOTAL: Rs. ${total}</h2>
    </div>
`;