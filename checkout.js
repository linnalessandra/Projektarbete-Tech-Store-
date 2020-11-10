var chechoutPage;

var currentShoppingcart=JSON.parse(localStorage.getItem("shoppingcart"))
console.log(currentShoppingcart)

function initSite () {
    clickCounter()
    updateCartTotal()
    for (let i = 0; i < currentShoppingcart.length; i++) {
        if(currentShoppingcart !=null){ 
            loadProducts(i)
    
        }
        
    }
}

function loadProducts (i) {
    let main=document.getElementById("main")
    /* Main container */
    let mainContainer=document.createElement("div")
    mainContainer.classList.add("mainContainer")
    /* Create title div */
    let titleDiv=document.createElement("div")
    titleDiv.classList.add("titleDiv")
    let phoneName=document.createElement("h1")
    phoneName.innerText=currentShoppingcart[i].title
    /*let phoneInfo=document.createElement("h4")
    phoneInfo.innerText=currentShoppingcart[i].description
    /* Create photo div */
    let photoDiv=document.createElement("div")
    let photo=document.createElement("img")
    photoDiv.classList.add("photo")
    photo.src ="assets/"+ currentShoppingcart[i].image
    /* Create price div */
    let priceDiv=document.createElement("div")
    priceDiv.classList.add("price")
    let price=document.createElement("h3")
    price.innerText=currentShoppingcart[i].price + " Kr"
    /* Create button */
    let buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttonDiv")
    let button=document.createElement("h5")
    button.innerText="Ta bort"
    button.classList.add("buttonText")
    /* cart-icon in button */
    let cartIcon = document.createElement("i")
    cartIcon.classList.add("far")
    cartIcon.classList.add("fa-trash-alt")
    /*let chechoutPriceDiv = document.createElement(div)

    /* Lägg till append child */
/*     main.appendChild(mainContainer) */
    main.appendChild(mainContainer)
    mainContainer.appendChild(photoDiv)
    mainContainer.appendChild(titleDiv)
    mainContainer.appendChild(priceDiv)
    mainContainer.appendChild(buttonDiv)
    titleDiv.appendChild(phoneName)
    //titleDiv.appendChild(phoneInfo)
    priceDiv.appendChild(price)
    priceDiv.appendChild(buttonDiv)
    buttonDiv.appendChild(cartIcon)
    buttonDiv.appendChild(button)
    photoDiv.appendChild(photo)
    //function that puts a clicked on product in cart

    buttonDiv.addEventListener("click", function(){
      currentShoppingcart.splice(i, 1)
      localStorage.setItem("shoppingcart", JSON.stringify(currentShoppingcart))
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
    
function updateCartTotal(){
let totalPrice = document.getElementById("totalPrice")
let price = 0
for (let i = 0; i < currentShoppingcart.length; i++) {
    let productPrice = currentShoppingcart[i].price
    if(currentShoppingcart !=null){
        price += productPrice

    } else if(currentShoppingcart == 0){
        price = 0 
    }
    totalPrice.innerHTML = "Totalt pris: " + price + " kr"

    
}
}





