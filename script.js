const apiKey = "3c974367097a6bebdf7ce15e38820042";

const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");
const errorMessage = document.getElementById("errorMessage");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Set default theme to light
body.classList.add("light");

// Theme toggle logic
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

// Handle weather fetch on button click
getWeatherBtn.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    errorMessage.textContent = "Please enter a city name.";
    weatherResult.classList.add("hidden");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("City not found. Please try again.");

    const data = await response.json();
    displayWeather(data);
    errorMessage.textContent = "";
  } catch (error) {
    weatherResult.classList.add("hidden");
    errorMessage.textContent = error.message;
  }
});

// Update the DOM with weather data
function displayWeather(data) {
  document.getElementById(
    "location"
  ).textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.main.temp} °C`;
  document.getElementById(
    "weatherIcon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  weatherResult.classList.remove("hidden");
}
