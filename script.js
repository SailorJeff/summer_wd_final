function openModal() {
    console.log("This has been clicked");
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "visible";

}

function closeModal() {
    var modal = document.getElementById("modal");
    
    modal.style.visibility = "hidden";
}

function addToCart() {
    console.log("This has been clicked as well");
    var modal = document.getElementById('modal');
}