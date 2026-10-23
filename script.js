let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount = cartCount + 1;
        cartDisplay.textContent = "Cart: " + cartCount + " items";
    });
});
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    products.forEach(function(product) {
        const productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
