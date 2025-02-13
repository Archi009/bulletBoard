//login 

const inputId = document.querySelector("input#exampleInputEmail")
const inputPw = document.querySelector("input#exampleInputPassword")
const formLogin = document.querySelector("form#formLogin")

const USERS = "user"
const user = JSON.parse(localStorage.getItem(USERS))
let userAct = new Object();

function loginHandler(e){
  e.preventDefault();
  for(let i =0; i<user.length;i++){
    console.log(user[i].id);
    console.log(user[i].pw);
    console.log(inputId.value.trim());
    if(inputId.value.trim() == user[i].id&&inputPw.value.trim() == user[i].pw){
      userAct = user[i]
      localStorage.setItem("nowUser",JSON.stringify(userAct))
      console.log("로그인");
      location.href= "index.html"
      return
    }
  }


}




formLogin.addEventListener("submit",loginHandler)