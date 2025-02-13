//log out

const btn = document.querySelector("a.btn")


function logOut(){
  localStorage.removeItem("nowUser")
  location.href = "authentication-login.html"
}


btn.addEventListener("click",logOut)
