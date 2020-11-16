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
    checkIfLoggedIn()
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
/*     main.appendChild(mainContainer) */
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



function checkIfLoggedIn(){
    let loggedin = JSON.parse(localStorage.getItem("loggedin"))
    console.log("hej")
    if(loggedin != null){
        let navDiv = document.getElementById("nav-icon")
        
        let mainDiv = document.getElementById("wrapperIcon")

        let linkLogin = document.getElementById("linklogin")
        linkLogin.style.display = "none"

        let loggedInUser = document.createElement("h4")
        loggedInUser.innerText = "Inloggad som " + loggedin.username
        loggedInUser.style.margin = "10px"

        let orderHistory = document.createElement("button")
        orderHistory.innerText = "Recent orders"
        orderHistory.style.border = "none"
        orderHistory.style.backgroundColor = "#212121"
        orderHistory.style.color = "#FFFFFF"
        orderHistory.style.cursor = "pointer"

        orderHistory.addEventListener("click", showOrderHistory)


        let logoutBtn = document.createElement("button")
        logoutBtn.innerText = "LogOut"
        logoutBtn.style.marginRight = "5px"
        logoutBtn.style.backgroundColor = "#212121"
        logoutBtn.style.color = "#FFFFFF"
        logoutBtn.style.border = "1px solid #FFFFFF"
        logoutBtn.style.cursor = "pointer"

        logoutBtn.addEventListener("click", ()=>{
            localStorage.removeItem("loggedin")
            location.replace("/index.html")
        })

        mainDiv.appendChild(logoutBtn)
        navDiv.append(loggedInUser, orderHistory)
        
    }
    
}


/* Skriv ut orderhistorik i main */
function showOrderHistory(){
    console.log("rätt funktion")
    let products = document.getElementsByClassName("mainContainer")
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "none"
        
    }

    let history = JSON.parse(localStorage.getItem("receipt"))
    if(history == null){
        let main = document.getElementById("main")
        main.style.textAlign = "center"
        
        let noRecentOrders = document.createElement("h3")
        noRecentOrders.innerText = "du har inga tidigare ordrar!"
        noRecentOrders.style.margin = "400px auto"
        

        main.appendChild(noRecentOrders)
    }
    /* products.style.display = "none" */
    console.log(history)
    for (let i = 0; i < history.length; i++) {
        const previousOrder = history[i];

        let main = document.getElementById("main")
        main.style.textAlign = "center"
        main.style.margin = "200px auto"
        main.style.width = "100%"
        main.style.display = "flex"
        main.style.flexDirection = "column"
        main.style.justifyContent = "center"
        main.style.alignItems = "center"
       

        let mainContainer = document.createElement("div")
        mainContainer.style.width = "50%"
        mainContainer.style.display = "flex"
        mainContainer.style.flexDirection = "column"
        mainContainer.style.justifyContent = "center"
        mainContainer.style.alignItems = "center"
        mainContainer.style.border = "1px solid black"
        mainContainer.style.border = "1px solid black"

        let shoppingDate = document.createElement("h2")
        shoppingDate.innerText = "Kvitto:"

        let productName = document.createElement("h3")
        productName.innerText = previousOrder.title

        let price = document.createElement("h4")
        price.innerText = previousOrder.price

        main.appendChild(mainContainer)
        mainContainer.append(shoppingDate, productName, price)

        
    }
}


    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
