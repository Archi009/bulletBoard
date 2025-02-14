//register.js

const registerForm = document.querySelector('form#registerFrom')
const inputNm = document.querySelector("input#exampleInputtext")
const inputId = document.querySelector("input#exampleInputEmail")
const inputPw = document.querySelector("input#exampleInputPassword")
const USERS = "user"
const savedUser = localStorage.getItem(USERS)
let parseUser = [];
let userAct = new Object();


let account = [];

console.log(savedUser);
if (savedUser != null) {
  parseUser = JSON.parse(savedUser)
  account = parseUser
}

function submitRegisterFrom(e) {
  e.preventDefault()
  console.dir(inputNm);
  console.dir(inputPw);
  console.dir(inputId);
  console.log(parseUser);
  if (parseUser.length > 0) { //저장된 계정이 있다면
    for (let i = 0; i < parseUser.length; i++) { //계정 중복 확인
      if (parseUser[i].id == inputId.value.trim()) {
        inputId.value = "";
        inputId.focus;
        alert("이미 존재하는 email 계정입니다. 다른 계정을 입력하세요")
        return;
      }
    }
    userAct.name = inputNm.value.trim()
    userAct.id = inputId.value.trim()
    userAct.pw = inputPw.value.trim()
    userAct.auth = 1;
    account.push(userAct);
    localStorage.setItem(USERS, JSON.stringify(account));
    location.href = "index.html"
  } else { //저장된 계정이 없다면
    console.log("else");
    userAct.name = inputNm.value.trim()
    userAct.id = inputId.value.trim()
    userAct.pw = inputPw.value.trim()
    userAct.auth = 1;
    account.push(userAct);
    localStorage.setItem(USERS, JSON.stringify(account));
    location.href = "index.html"
  }



}



registerForm.addEventListener("submit", submitRegisterFrom)