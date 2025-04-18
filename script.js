const apiKey = "d1fe4a88c0a2030d1f95e1754cf571bf"; // Replace with your actual API key

document.getElementById("getWeather").addEventListener("click", function () {
  const location = document.getElementById("location").value;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherResult = document.getElementById("weatherResult");
      if (data.success === false) {
        weatherResult.innerHTML = "Location not found";
        weatherResult.style.display = "block";
      } else {
        const weather = data.current;
        weatherResult.innerHTML = `
                    <h2>Weather in ${data.location.name}</h2>
                    <p>Temperature: ${weather.temperature}°C</p>
                    <p>Weather: ${weather.weather_descriptions[0]}</p>
                    <p>Humidity: ${weather.humidity}%</p>
                `;
        weatherResult.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherResult").innerHTML =
        "Error fetching data";
      document.getElementById("weatherResult").style.display = "block";
    });
});
