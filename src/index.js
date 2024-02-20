import { getData, getForecast } from "./modules/logic";

const searchButton = document.getElementById("search-button");
const input = document.getElementById("location-search");
const fahrenBuutton = document.getElementById("fahren-button");
const celciusButton = document.getElementById("celcius-button");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(input.value);
  getForecast(input.value);
});

fahrenBuutton.addEventListener("click", () => {
  getData(input.value, true);
  getForecast(input.value, true);
});

celciusButton.addEventListener("click", () => {
  getData(input.value, false);
  getForecast(input.value, false);
});
