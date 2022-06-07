let currentDate = new Date();
let hours = currentDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[currentDate.getDay()];
let currentTime = `${hours}:${minutes}`;
let date = document.querySelector("#date");
date.innerHTML = `${currentDay} ${currentTime}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let celsiusTemperature = document.querySelector("#temp");
  celsiusTemperature.innerHTML = `${temperature}`;
  let city = document.querySelector("h2");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "95079470ff44c6aa5da0f360fda49fbf";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("h2");
  city.innerHTML = `${searchInput.value}`;
  searchCity(searchInput.value);
  //let city = searchInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);

//

//week4
//let city = document.querySelector("#city");
//id="celcius-temp"
//function showCelcius() {
// let a = document.querySelector("a");
//  a.innerHTML = "28 C";
//}
//let celsiusTemperature = document.querySelector("#celcius-temp");
//celsiusTemperature.addEventListener("click", showCelcius);
//function showFah() {
// let a = document.querySelector("a");
//a.innerHTML = "68";
//}
//let fahrenheitTemperature = document.querySelector("#fahrenheit-temp");
//fahrenheitTemperature.addEventListener("click", showFah);

///agregar despues
//function convertToFahrenheit(event) {
// event.preventDefault();
//  let temperatureElement = document.querySelector("#temp");
// temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
//}

// function convertToCelsius(event) {
// event.preventDefault();
///  let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = 19;
//}

//let fahrenheitTemperature = document.querySelector("#fahrenheit-link");
//fahrenheitTemperature.addEventListener("click", convertToFahrenheit);

///let celsiusTemperature = document.querySelector("#celsius-link");
///celsiusTemperature.addEventListener("click", convertToCelsius);

//week5
//Debo llamar a la api dentro de la funcion porque solo ahi existen la latitud y la longitud, ya que las obtengo de la position
function showPosition(position) {
  let lat = `${position.coords.latitude}`;
  let lon = `${position.coords.longitude}`;
  let apiKey = "95079470ff44c6aa5da0f360fda49fbf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function push() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentCity = document.querySelector("#current-city");
currentCity.addEventListener("click", push);

searchCity("Washington");
