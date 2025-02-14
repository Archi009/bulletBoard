//board.js

const boardForm = document.querySelector("form#boardForm")
const boardTitle = document.querySelector("input#title")
const boardText = document.querySelector("textarea#board")
const btnSubmit = document.querySelector("button#submit")
const btnAlter = document.querySelector("button#alter")
const btnCheck = document.querySelector("button#check")
const HIDDEN_CLASSNAME = "d-none"//display-none
const BOARD = "board"
const ITEM = "item"
const savedBoard = localStorage.getItem(BOARD) //저장돼있는 게시판 목록
const getBoard = localStorage.getItem(ITEM)       //상세게시판으로 접속했을 경우
let parsedBoard = null;
btnAlter.classList.toggle(HIDDEN_CLASSNAME)
btnCheck.classList.toggle(HIDDEN_CLASSNAME)
let detail = new Object()
let boardDetail = [];
let needNo = null
console.log(getBoard);

if(savedBoard != null){                      //새로고침으로 없어지기 전에 저장
  parsedBoard = JSON.parse(savedBoard)
  boardDetail = parsedBoard
}
// console.log(boardDetail);
if(getBoard != null){                       //상세 조회로 넘어왔을때
  needNo = JSON.parse(getBoard)
  
  parsedBoard =JSON.parse(savedBoard)
 
  for (let i = 0; i < parsedBoard.length; i++) {
    if(parsedBoard[i].time == needNo){
      boardTitle.value = parsedBoard[i].title
      boardText.value = parsedBoard[i].text
      boardTitle.setAttribute("readonly","")
      boardText.setAttribute("readonly","")
    }
  }
  btnAlter.classList.toggle(HIDDEN_CLASSNAME)
  btnSubmit.classList.toggle(HIDDEN_CLASSNAME)
  
}
console.log(needNo);
function saveBoard () {
  console.log(boardText.value);
  let test = boardText.value
  let test2 = boardTitle.value
  if(!test||!test2)   {
    alert("제목과 내용을 입력하세요")
    boardTitle.focus()
    return;
  }
  // if(!test2){ 
  //    return
  // }
  detail.title = boardTitle.value
  detail.text = boardText.value
  detail.name = JSON.parse(localStorage.getItem("nowUser")).name
  detail.time = Date.now()
  detail.check = 0
  
  boardDetail.push(detail)
  localStorage.setItem(BOARD,JSON.stringify(boardDetail))
  location.href = "boardList.html"
}

function alterBoard(){
 btnAlter.classList.toggle(HIDDEN_CLASSNAME)
 btnCheck.classList.toggle(HIDDEN_CLASSNAME)
 boardTitle.removeAttribute("readonly")
 boardText.removeAttribute("readonly")
 console.log(parsedBoard);
}

function alterConfirm(){
  let test = boardText.value
  let test2 = boardTitle.value
  if(!test||!test2)   {
    alert("제목과 내용을 입력하세요")
    boardTitle.focus()
    return;
  }
  parsedBoard =JSON.parse(savedBoard)
  detail.title = boardTitle.value
  detail.text = boardText.value
  detail.name = JSON.parse(localStorage.getItem("nowUser")).name
  detail.time = Date.now()
  parsedBoard = parsedBoard.filter((item)=>item.time != needNo)
  parsedBoard.push(detail)
  localStorage.removeItem("item")
  localStorage.setItem(BOARD,JSON.stringify(parsedBoard))
  location.href ="boardList.html"

}

function block(e){
  e.preventDefault()
}



boardForm.addEventListener("submit",block)  //페이지 자동 이동막기
btnSubmit.addEventListener("click",saveBoard) //게시물 저장
btnAlter.addEventListener("click",alterBoard) //게시물 수정 활성화
btnCheck.addEventListener("click",alterConfirm) //수정
