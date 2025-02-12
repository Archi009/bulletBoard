//Add your ApiKey from openweathermap.org
const apiKey = "98211809994d79784d50583bd0b3d1ed";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card-weather");
const cloudAnimation = document.querySelector(".container-w");

navigator.geolocation.getCurrentPosition(checkWeather, onGeoError)
function onGeoError (e){
  console.log(e);
  alert("Can't find you")
}
async function checkWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    return;
  } else {
    restartFadeInAnimation();
    cloudAnimation.style.display = "none";
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "../assets/images/weather/clouds.png";
        card.style.background = "linear-gradient(135deg, #b0c4b1, #6e7f74)";
        card.style.boxShadow = "0px 4px 15px  #b0c4b1";
        break;
      case "Clear":
        weatherIcon.src = "../assets/images/weather/clear.png";
        card.style.background = "linear-gradient(135deg, #ff6b6b, #ffb347)";
        card.style.boxShadow = "0px 4px 15px  #ff6b6b";
        break;
      case "Rain":
        weatherIcon.src = "../assets/images/weather/rain.png";
        card.style.background = "linear-gradient(135deg, #2f3d4c, #644e58)";
        card.style.boxShadow = "0px 4px 15px  #2f3d4c";
        break;
      case "Drizzle":
        weatherIcon.src = "../assets/images/weather/drizzle.png";
        card.style.background = "linear-gradient(135deg, #b0c4b1, #6e7f74)";
        card.style.boxShadow = "0px 4px 15px   #b0c4b1";
        break;
      case "Mist":
        weatherIcon.src = "../assets/images/weather/mist.png";
        card.style.background = "linear-gradient(135deg, #3a3f44, #a4b8d9)";
        card.style.boxShadow = "0px 4px 15px  #3a3f44";
        break;
      default:
        weatherIcon.src = "../assets/images/weather/mist.png";
        card.style.background = "linear-gradient(135deg, #3a3f44, #a4b8d9)";
        card.style.boxShadow = "0px 4px 15px  #3a3f44";
        break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

function restartFadeInAnimation() {
  // Remove animation properties
  document.body.style.animation = "none";

  // Trigger a reflow to apply the style changes immediately
  void document.body.offsetWidth;

  // Add animation properties back
  document.body.style.animation = "fadeInAnimation ease 3s";
  document.body.style.animationIterationCount = "1";
  document.body.style.animationFillMode = "forwards";
}

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
// searchBox.addEventListener("keyup", function (event) {
//   //after pressing enter call checkWeather function
//   if (event.keyCode == 13) {
//     checkWeather(searchBox.value);
//   }
// });