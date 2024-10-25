document.getElementById("get-weather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherResult = document.getElementById("weather-result");
      weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});
