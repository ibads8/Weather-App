let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//let currentDay = days[currentDate.getDay()];
//let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
//let h4 = document.querySelector("h4");
//h4.innerHTML = `${currentDay} ${currentTime}`;

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let celsiusTemperature = document.querySelector("#celcius-temp");
  celsiusTemperature.innerHTML = `${temperature}°C`;
  let city = document.querySelector("h2");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
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

//week5

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
