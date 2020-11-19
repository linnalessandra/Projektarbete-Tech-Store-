/* create account */
let loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", createAccount)
function createAccount(){
    let allAccounts = JSON.parse(localStorage.getItem("customers"))
    if(allAccounts == null){
        allAccounts = []
    }
    let inputUsername = document.getElementById("inputusername").value
    let inputPassword = document.getElementById("inputpassword").value
    let account = {
        "username": inputUsername,
        "password": inputPassword
    }
    allAccounts.push(account)
    localStorage.setItem("customers", JSON.stringify(allAccounts))
    alert("you succesfully created an account")
    location.replace("/login.html")
}
function initSite(){
    loadProducts()
}
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
    let buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttonDiv")
    let button=document.createElement("h5")
    button.innerText="Lägg till i kundvagnen"
    button.classList.add("buttonText")
    /* cart-icon in button */
    let cartIcon = document.createElement("i")
    cartIcon.classList.add("fas")
    cartIcon.classList.add("fa-cart-arrow-down")
    /* Lägg till append child */
    body.appendChild(mainContainer)
    mainContainer.appendChild(titleDiv)
    mainContainer.appendChild(photoDiv)
    mainContainer.appendChild(priceDiv)
    titleDiv.appendChild(phoneName)
    titleDiv.appendChild(phoneInfo)
    priceDiv.appendChild(price)
    priceDiv.appendChild(buttonDiv)
    buttonDiv.appendChild(cartIcon)
    buttonDiv.appendChild(button)
    photoDiv.appendChild(photo)
    //function that puts a clicked on product in cart
    buttonDiv.addEventListener("click", function(){
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
        clickCounter()
    })   
}