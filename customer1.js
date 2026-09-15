document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("restaurantSearch");
    const restaurantList = document.getElementById("restaurantList");

    search.addEventListener("focus", () => {
        restaurantList.style.display = "block";
    
    });
    const orderButton = document.getElementById("orderButton");

    orderButton.addEventListener("click", () => {

    const selectedRestaurant = search.value;

    if (selectedRestaurant === "") {
        alert("Please select a restaurant first.");
        return;
    }

    if (selectedRestaurant === "The Tea Tapri") {
        window.location.href = "teatapri.html";
    }

});

    const restaurants = restaurantList.querySelectorAll("p");

    restaurants.forEach(restaurant => {
        restaurant.addEventListener("click", () => {
            search.value = restaurant.textContent;
            restaurantList.style.display = "none";
        });
    });

});
