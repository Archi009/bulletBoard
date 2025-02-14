//login 

let admin = {
  name: "김어진",
  id: "admin@naver.com",
  pw: "qwer1234",
  auth: 0
}

const inputId = document.querySelector("input#exampleInputEmail")
const inputPw = document.querySelector("input#exampleInputPassword")
const formLogin = document.querySelector("form#formLogin")
let user =[]

const USERS = "user"
let data = JSON.parse(localStorage.getItem(USERS))
console.log(data);
if(data==null){
  data = []
  data.push(admin)
  console.log(data);
  localStorage.setItem(USERS,JSON.stringify(data))
  console.log(JSON.stringify(data));
  data = JSON.parse(localStorage.getItem(USERS))
}

// if(data != null ){ // 로컬스토리지에 관리자 있으면 추가 안함
//   let count = 0
//   for(let i=0; i<data.length; i++){
    
//     if(data[i].id != admin.id ){ //로컬스토리지에 관리자계정이 없다면
//       console.log(data);
//       console.log(count);
//       continue;
//     }else{
//       count++
//     }  

//   }
//   if(count == 0){
//     console.log(data);
//     user = data;
//     user.push(admin);
//     console.log(user);
//   }else{
//     console.log(data);
//   }
  
// }else{
//   console.log(data+"else");
//   data = []
//   data.push(admin)
//   user = data
//   console.log(user);
// }

// localStorage.setItem(USERS,JSON.stringify(data)) // 리셋 방지용으로 기존 데이터 받아와서 로컬에 저장

let userAct = new Object();

function loginHandler(e){
  e.preventDefault();

  
  for(let i =0; i<data.length;i++){
    console.log(inputId.value);
    if(inputId.value.trim() == data[i].id&&inputPw.value.trim() == data[i].pw){
      console.log(data[i].id)
      userAct = data[i]
      
      localStorage.setItem("nowUser",JSON.stringify(userAct))
      // console.log("로그인");
      location.href= "bullet.html"
      return
    }
  }
alert("아이디 패스워드를 확인하세요")

}




formLogin.addEventListener("submit",loginHandler)