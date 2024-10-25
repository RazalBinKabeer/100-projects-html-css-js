const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const cityNameElem = document.getElementById("city-name");
const temperatureElem = document.getElementById("temperature");
const descriptionElem = document.getElementById("description");

// OpenWeatherMap API key (you will need to replace this with your own API key)
const apiKey = "YOUR_API_KEY_HERE";

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

// Function to fetch weather data
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Update the weather info on the page
    cityNameElem.textContent = data.name;
    temperatureElem.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElem.textContent = `Description: ${data.weather[0].description}`;

    // Show the weather info
    weatherInfo.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
  }
}
