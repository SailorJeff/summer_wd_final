// Model all data.  In this case, we will just have
// an array with one product in it
products = [
    {
        name: "Awesome Sauce",
        description: "Produced by Team Saucesome",
        price: 49.29,
        imgUrl: "./images/AbsolutVodka.png",
        reviews: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde. Quia, dolorum. Qui nobis repellendus blanditiis ex totam inventore maxime. Sed corporis enim similique reprehenderit modi maiores mollitia, minus iste.",
            "Illo, unde. Quia, dolorum. Qui nobis repellendus blanditiis ex totam inventore maxime. Sed corporis enim similique reprehenderit modi maiores mollitia, minus iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        ]

    }
]

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
    openModal()
    var modal = document.getElementById('modal');
}

/**
 * This function creates one productContainer div and appends it to the products div
 * 
 * @param product Object of shape {name: string, description: string, price: number, imgUrl: string, reviews: array[string]}
 */
function createProduct(product) {
    // Get the products div
    const allProductsContainer = document.getElementById("products")

    // Create div with class productContainer and add the allProductsContainer
    const productContainer = document.createElement("div")
    productContainer.className = "productContainer"
    allProductsContainer.appendChild(productContainer)

    // Create div with class productData and append it to productContainer
    const productData = document.createElement("div")
    productData.className = "productData"
    productContainer.appendChild(productData)

    // Create Image element and append it to productData
    const productImage = document.createElement("img")
    productImage.src = product.imgUrl
    productImage.className = "productImage"
    productData.appendChild(productImage)

    // Create productInfo div and append to productData
    const productInfo = document.createElement("div")
    productInfo.className = "productInfo"
    productData.appendChild(productInfo)

    // Create productName div and append to productInfo
    const productName = document.createElement("div")
    productName.className = "productName"
    productInfo.appendChild(productName)

    // Populate productName with product data
    const productNameData = document.createElement("h1")
    productNameData.innerHTML = product.name
    productName.appendChild(productNameData)

    const productDescription = document.createElement("h2")
    productDescription.innerHTML = product.description
    productName.appendChild(productDescription)

    const productPrice = document.createElement("h2")
    productPrice.innerHTML = `$${product.price}`
    productName.appendChild(productPrice)

    // Insert break element to productInfo
    productInfo.appendChild(document.createElement("br"))

    // Create cartDescription div and append to productInfo
    const cartDescription = document.createElement("div")
    cartDescription.className = "cartDescription"
    productInfo.appendChild(cartDescription)

    // Create buttons div and add to cartDescription
    const buttonsContainer = document.createElement("div")
    buttonsContainer.className = "buttons"
    cartDescription.appendChild(buttonsContainer)

    // Create and add buttons to buttonContainer
    // We will add functionality to next refactor
    const reviewButton = document.createElement("button")
    reviewButton.className = "reviewButton"
    reviewButton.innerHTML = "Reviews"
    const addToCartButton = document.createElement("button")
    addToCartButton.className = "addToCartButton"
    addToCartButton.innerHTML = "Add to Cart"

    buttonsContainer.appendChild(reviewButton)
    buttonsContainer.appendChild(document.createElement("br"))
    buttonsContainer.appendChild(addToCartButton)

    // Create prodcutReviews div and add to productContainer
    const productReviews = document.createElement("div")
    productReviews.className = "productReviews"
    productContainer.appendChild(productReviews)

    // Add header to product reviews
    const reviewsHeader = document.createElement("h1")
    reviewsHeader.innerHTML = "Customer Reviews:"
    productReviews.appendChild(reviewsHeader)

    // Use the product reviews stored in state to add each to the productReviews div
    product.reviews.forEach(rev => {
        const revElement = document.createElement("p")
        revElement.innerHTML = rev
        revElement.className = "review"
        productReviews.appendChild(revElement)
    })
}

/**
 * When script loads call the createProduct method on each of the products in products array
 * 
 */

products.forEach(product => {
    createProduct(product)
})