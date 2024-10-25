document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    fetchWeather(city);
  });

function fetchWeather(city) {
  const apiKey = "your_api_key_here";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCurrentWeather(data);
      fetchForecast(city);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function displayCurrentWeather(data) {
  document.getElementById("location").textContent = data.name;
  document.getElementById("temperature").textContent = `${data.main.temp} °C`;
  document.getElementById("conditions").textContent =
    data.weather[0].description;
}

function fetchForecast(city) {
  const apiKey = "your_api_key_here";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayForecast(data);
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
}

function displayForecast(data) {
  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";
  data.list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.dt_txt}: ${item.main.temp} °C, ${item.weather[0].description}`;
    forecastList.appendChild(listItem);
  });
}
