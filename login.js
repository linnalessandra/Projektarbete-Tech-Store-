/* hämtar login-knappen */
let loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", login)
/* kollar om användare finns */
function login(){
    let inputUsername = document.getElementById("inputusername").value
    let inputPassword = document.getElementById("inputpassword").value
    let allAccounts = JSON.parse(localStorage.getItem("customers"))

    for (let i = 0; i < allAccounts.length; i++) {
        const customer = allAccounts[i];
        
        if(inputUsername == customer.username && inputPassword == customer.password){
            alert("you are logged in")
            let loggedin = {
                "username": customer.username,
                "password": customer.password
            }
            localStorage.setItem("loggedin", JSON.stringify(loggedin))
            location.replace("/index.html")
            break
        }
        
    }
    
}


function initSite(){
    
}