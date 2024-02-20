import { getData, getForecast } from "./modules/logic";

const searchButton = document.getElementById("search-button");
const input = document.getElementById("location-search");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(input.value);
  getForecast(input.value);
});
