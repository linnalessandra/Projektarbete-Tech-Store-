window.addEventListener("load", initSite)
document.getElementById("loginBtn").addEventListener("click", login)

function initSite() {
    
}

function login() {
    console.log(login);

}






let users = [
    {
         username: "ryan",
         password: "123",
     },
   {
         username: "sara",
       password: "123",
     },
     {
         username: "linn",
         password: "123",
   }
 ]

localStorage.setItem("userList", JSON.stringify(users)