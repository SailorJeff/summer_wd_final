var shoppingCart = [];

// To open the cart, add items to it and open the modal where the cart rests
function addToCart(title, price) {
    console.log("This has been clicked as well");
    openModal()
    var modal = document.getElementById('modal');
    var product = {};
    productTitle = title;
    productPrice = price;
    shoppingCart.push(product);
    displayShoppingCart();
}

// to display information within the cart
function displayShoppingCart() {
    var totalPrice = 0;
    var displayTitle = document.getElementById("displayTitle");
    var displayPrice = document.getElementById("displayPrice");
    for (var product in shoppingCart) {
        displayTitle.innerHTML = shoppingCart.productTitle;
        displayPrice.innerHTML = shoppingCart.productPrice;
    }
}

// additional part of displaying info in the cart
var item1 = document.getElementById("displayTitle");
displayTitle.addEventListener("click", addToCart("Awesome Sauce"));
displayPrice.addEventListener("click", addToCart("$49.29"));

// to open the modal and make it visible
function openModal() {
    console.log("This has been clicked");
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "visible";

}

// to close the modal and hide it
function closeModal() {
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "hidden";
}
