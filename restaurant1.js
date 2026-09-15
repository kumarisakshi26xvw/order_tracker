document.addEventListener("DOMContentLoaded", () => {

    const restaurantName = document.getElementById("restaurantName");
    const restaurantEmail = document.getElementById("restaurantEmail");
    const restaurantLogin = document.getElementById("restaurantLogin");

    const registeredRestaurants = {
        "the tea tapri": "teatapri@gmail.com",
        "chai junction": "chaijunction@gmail.com",
        "desi tadka": "desitadka@gmail.com"
    };

    restaurantLogin.addEventListener("click", () => {

        const name = restaurantName.value.trim().toLowerCase();
        const email = restaurantEmail.value.trim().toLowerCase();

        if (registeredRestaurants[name] === email) {
            window.location.href = "teataprires.html";
        }
        else if(registeredRestaurants[name].length==0) {
        
        }
        else{
            alert("THE ENTERED NAME OR EMAIL IS INCORRECT")
        }

    });

});