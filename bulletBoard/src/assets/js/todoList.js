//todoList.jsconst 

const toDoList = document.querySelector('#todoList')
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
TODOS_KEY = "todos" 

let toDos = [];



function saveToDos (){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}//JSON.strigify() => 객체나 배열따위를 JSON 형태의 String으로 바꿔준다.  
//localStroge 에서 불러온 JSON형태의 String을 다시 Javasctipt에서 활용할 수있게 하려면 JSON.parse()를 이용하면 된다..

function deleteTodo(event){
  
  const td = event.target.parentElement;
  console.dir(td.parentElement.children[1].id);
  const tr= event.target.parentElement.parentElement
  toDos = toDos.filter((toDo) => (toDo.id !== parseInt(td.parentElement.children[1].id)) ) //toDos에 toDos배열에서 필터한 값을 넣어주겠다. 필터에는 매번 돌아갈때 마다 함수가 실행되는데,
  //그 함수의 매개변수 값으로 그순서의 값을 toDos 에서 가져와 id를 삭제한 id와 비교해서 boolean 값을 반환한다. true면 fillter함수의 기능에 따라 반환하고 아니면 반환하지 않는다.
  console.log(toDos);
  saveToDos()
  tr.remove()
}

function checkedList(event){
  if(event.target.checked){
    console.log(event.target.parentElement);
    const line = event.target.parentElement
    line.parentElement.setAttribute("class","font_test3")
    console.log(line.parentElement);
  }
}

function paintToDo(newTodo){
//  console.log("iwillpaint"+newTodo); 
  const tr = document.createElement("tr");
  const tdForCh = document.createElement("td")
  const td = document.createElement("td");
  const tdForBtn = document.createElement("td")
  console.log(newTodo);
  td.id = newTodo.id;
  
  const ch = document.createElement("input")
  ch.type = "checkbox"
  ch.addEventListener('click',checkedList)
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  
  const button = document.createElement("span");
  button.setAttribute("class","badge bg-danger rounded-3 fw-semibold cursor-pointer")
  button.innerText="✖️"
  button.addEventListener("click",deleteTodo)
  tdForCh.appendChild(ch)
  td.appendChild(span);
  tdForBtn.appendChild(button)

  tr.appendChild(tdForCh);
  tr.appendChild(td);
  tr.appendChild(tdForBtn)
  toDoList.appendChild(tr)

}

function handleToDoSubmit (event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id: Date.now()
  }//String 배열로 저장하면 돌아왔을때 필요한 값을 구분 하기 힘들기 때문에 객체를 배열에 담아 id값으로 구분
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); //localStroge에 저장하고있지만 새로고침 하고 새로운 todo 를 입력하면 스토리지 안의 정보가 사라진다
  //1회성 인가?

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);



if(savedToDos != null){
  const parsedToDos =JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDos = parsedToDos //직전 list의 값을 받아오지만, 직전보다 이전의 값을 저장하지 않아서 또 새로고침을 하면 직전만 받아온다
  // 따라서 직전 값을 미리 배열에 넣어준다.
  parsedToDos.forEach((item) => paintToDo(item));
}