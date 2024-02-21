import { getData, getForecast } from "./modules/logic";

const searchButton = document.getElementById("search-button");
const input = document.getElementById("location-search");
const fahrenButton = document.getElementById("fahren-button");
const celsiusButton = document.getElementById("celsius-button");
celsiusButton.style.setProperty("background", "var(--blue-color)");

let currentLocation = "San Salvador";
getData(currentLocation);
getForecast(currentLocation);

function toggleTemperatureButton(activeButton, inactiveButton, activeColor) {
  inactiveButton.classList.remove("active-button");
  inactiveButton.style.removeProperty("background");

  activeButton.classList.add("active-button");
  activeButton.style.setProperty("background", activeColor);
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(input.value);
  getForecast(input.value);
  currentLocation = input.value;
  toggleTemperatureButton(celsiusButton, fahrenButton, "var(--blue-color)");
});

fahrenButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(currentLocation, true);
  getForecast(currentLocation, true);
  toggleTemperatureButton(fahrenButton, celsiusButton, "var(--red-color)");
});

celsiusButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(currentLocation, false);
  getForecast(currentLocation, false);
  toggleTemperatureButton(celsiusButton, fahrenButton, "var(--blue-color)");
});
