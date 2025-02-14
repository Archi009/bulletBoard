//log out

const btn = document.querySelector("a.btn")


function logOut(){
  localStorage.removeItem("nowUser")
  location.href = "index.html"
}


btn.addEventListener("click",logOut)
