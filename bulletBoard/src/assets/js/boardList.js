//boardList.js
const BOARD = "board"
const HIDDEN = "d-none"

const savedList = localStorage.getItem(BOARD)
const tbody = document.querySelector("tbody#board-list")

let boardlist = []

if (savedList != null) {
  boardlist = JSON.parse(savedList)
  for (let i = 0; i < boardlist.length; i++) {
    const tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")

    td1.innerText = i + 1
    tr.appendChild(td1)

    td2.innerText = boardlist[i].title
    td2.addEventListener("click", goDetail)
    tr.appendChild(td2)
    
    
    td3.innerText = boardlist[i].name
    tr.appendChild(td3)
    
    td4.innerText = boardlist[i].time
    // td4.style.display = "none"
    td4.classList.add(HIDDEN)
    tr.appendChild(td4)
    tbody.appendChild(tr)
  }
}

function goDetail(e) {
  console.dir(e.target.parentElement.lastChild.innerText);
  const target = e.target.parentElement
  localStorage.setItem("item",JSON.stringify(target.lastChild.innerText))
  location.href="board.html"
}