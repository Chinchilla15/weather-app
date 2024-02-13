import { getData } from "./modules/logic";

const searchButton = document.getElementById("search-button");
const input = document.getElementById("location");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getData(input.value);
});
