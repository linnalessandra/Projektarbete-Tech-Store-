var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();       
    })
    .then(function(products) {
        listOfProducts = products;
        for(var i = 0; i <listOfProducts.length;i++) {addProductsToWebpage(i)}
    });
}
/* starts when siteloads */
function initSite() {
    loadProducts();
    clickCounter()
}
/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage(i) {
    let body=document.body
    /* Main container */
    let mainContainer=document.createElement("div")
    mainContainer.classList.add("mainContainer")
    /* Create title div */
    let titleDiv=document.createElement("div")
    titleDiv.classList.add("titleDiv")
    let phoneName=document.createElement("h1")
    phoneName.innerText=listOfProducts[i].title
    let phoneInfo=document.createElement("h4")
    phoneInfo.innerText=listOfProducts[i].description
    /* Create photo div */
    let photoDiv=document.createElement("div")
    let photo=document.createElement("img")
    photoDiv.classList.add("photo")
    photo.src ="assets/"+ listOfProducts[i].image
    /* Create price div */
    let priceDiv=document.createElement("div")
    priceDiv.classList.add("price")
    let price=document.createElement("h3")
    price.innerText=listOfProducts[i].price + " Kr"
    /* Create button */
    let button=document.createElement("button")
    button.innerText="Lägg till i kundvagnen"
    /* Lägg till append child */
/*     main.appendChild(mainContainer) */
    body.appendChild(mainContainer)
    mainContainer.appendChild(titleDiv)
    mainContainer.appendChild(photoDiv)
    mainContainer.appendChild(priceDiv)
    titleDiv.appendChild(phoneName)
    titleDiv.appendChild(phoneInfo)
    priceDiv.appendChild(price)
    priceDiv.appendChild(button)
    photoDiv.appendChild(photo)
    //function that puts a clicked on product in cart
    button.addEventListener("click", function(){
        let cart = {
            title: listOfProducts[i].title,
            description: listOfProducts[i].description,
            image: listOfProducts[i].image,
            price: listOfProducts[i].price
        }
        let currentShoppingCart = JSON.parse(localStorage.getItem("shoppingcart"))
        if(currentShoppingCart == null){
            currentShoppingCart = []
        }
        currentShoppingCart.push(cart)
        localStorage.setItem("shoppingcart", JSON.stringify(currentShoppingCart))
        location.reload()
    })   
}
    //function that counts products in cart
    function clickCounter(){
        let countProducts = JSON.parse(localStorage.getItem("shoppingcart"))
        let productsInCart = document.getElementById("productsInCart")
        let clicks = 0
        if(countProducts != null){
            clicks = countProducts.length
            productsInCart.innerHTML = clicks
        } else if(countProducts == 0){
            productsInCart.innerHTML = clicks
        }
    }

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
