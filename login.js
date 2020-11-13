let createAccountBtn = document.getElementById("join")
createAccountBtn.addEventListener("click", createAccount)

let loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", login)

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
    /* skicka till login här */
}


function login(){
    let inputUsername = document.getElementById("inputusername").value
    let inputPassword = document.getElementById("inputpassword").value
    let allAccounts = JSON.parse(localStorage.getItem("customers"))

    for (let i = 0; i < allAccounts.length; i++) {
        const customer = allAccounts[i];
        
        if(inputUsername == customer.username && inputPassword == customer.password){
            alert("you are logged in")
        }else{
            alert("wrong username or password")
        }
        
    }
    
}