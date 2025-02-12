const clock = document.querySelector("p#clock span:first-child ");
const noon = document.querySelector("p#clock span:last-child ");


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = (`${hours}:${minutes}:${second}`);
  if(hours>12){
    noon.innerText = "PM"
  }else{
    noon.innerText = "AM"

  }
}
getClock();
setInterval(getClock, 1000); 