var shoppingCart = [];

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

function displayShoppingCart() {
    var totalPrice = 0;
    var displayTitle = document.getElementById("displayTitle");
    var displayPrice = document.getElementById("displayPrice");
    for (var product in shoppingCart) {
        displayTitle.innerHTML = shoppingCart.productTitle;
        displayPrice.innerHTML = shoppingCart.productPrice;
    }
}

var item1 = document.getElementById("item1");
item1.addEventListener("click", addToCart("Awesome Sauce",'$49.29'));

function openModal() {
    console.log("This has been clicked");
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "visible";

}

function closeModal() {
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "hidden";
}
