const clock = document.querySelector("p#clock span:first-child ");
const noon = document.querySelector("p#clock span:last-child ");
const clockText = document.querySelector("p.day-text")

function getClock() {
  const month = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"]
  const date = new Date();
  const mon = date.getMonth() + 1
  const dat = date.getDate()
  const day = month[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = (`${hours}:${minutes}:${second}`);
  clockText.innerText = (`${day}, ${mon} ${dat}th`)
  if (hours > 12) {
    noon.innerText = "PM"
  } else {
    noon.innerText = "AM"

  }
}
getClock();
setInterval(getClock, 1000);