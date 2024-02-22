import { getData, getForecast } from "./modules/logic";
import { toggleTemperatureButton } from "./modules/dom";

const form = document.getElementById("search-form");
const input = document.getElementById("location-search");
const fahrenButton = document.getElementById("fahren-button");
const celsiusButton = document.getElementById("celsius-button");
celsiusButton.style.setProperty("background", "var(--blue-color)");

let currentLocation = "San Salvador";

getData(currentLocation);
getForecast(currentLocation);

input.addEventListener("input", () => {
  if (input.validity.tooShort) {
    input.setCustomValidity("Location must have 3 or more characters");
  } else if (/\d/.test(input.value)) {
    input.setCustomValidity("Invalid input: Numers are not allowed");
  } else {
    input.setCustomValidity("");
  }
  input.reportValidity();
});

form.addEventListener("submit", (e) => {
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
