// DOM elements for current day
const locationName = document.getElementById("location-name");
const condition = document.getElementById("condition-0");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const precipitation = document.getElementById("precipitation");
const uvIndex = document.getElementById("uv-index");
const minTemp0 = document.getElementById("min-temp-0");
const maxTemp0 = document.getElementById("max-temp-0");

// DOM elements for forecast
const condition1 = document.getElementById("condition-1");
const minTemp1 = document.getElementById("min-temp-1");
const maxTemp1 = document.getElementById("max-temp-1");
const condition2 = document.getElementById("condition-2");
const minTemp2 = document.getElementById("min-temp-2");
const maxTemp2 = document.getElementById("max-temp-2");
const condition3 = document.getElementById("condition-3");
const minTemp3 = document.getElementById("min-temp-3");
const maxTemp3 = document.getElementById("max-temp-3");

const tempImg = document.getElementById("temp-img");
const feelsLikeImg = document.getElementById("feels-like-img");

/* eslint-disable camelcase */
function showDataCurrent_C(data) {
  locationName.innerHTML = `${data.name}, ${data.country}`;
  condition.innerHTML = data.condition;
  temp.innerHTML = data.celciusData;
  feelsLike.innerHTML = data.feelsLikeC;
  humidity.innerHTML = data.humidity;
  wind.innerHTML = data.windKph;
  precipitation.innerHTML = data.precipMm;
  uvIndex.innerHTML = data.uv;
  tempImg.src = "./images/celsius.svg";
  feelsLikeImg.src = "./images/thermometer-celsius.svg";
}

function showDataCurrent_F(data) {
  locationName.innerHTML = `${data.name}, ${data.country}`;
  condition.innerHTML = data.condition;
  temp.innerHTML = data.fahrenheitData;
  feelsLike.innerHTML = data.feelsLikeF;
  humidity.innerHTML = data.humidity;
  wind.innerHTML = data.windKph;
  precipitation.innerHTML = data.precipMm;
  uvIndex.innerHTML = data.uv;
  tempImg.src = "./images/fahrenheit.svg";
  feelsLikeImg.src = "./images/thermometer-fahrenheit.svg";
}

function showDataForecast_C(data) {
  minTemp0.innerHTML = data.mintemp_c_0;
  maxTemp0.innerHTML = data.maxtemp_c_0;
  condition1.innerHTML = data.condition_1;
  minTemp1.innerHTML = data.mintemp_c_1;
  maxTemp1.innerHTML = data.maxtemp_c_1;
  condition2.innerHTML = data.condition_2;
  minTemp2.innerHTML = data.mintemp_c_2;
  maxTemp2.innerHTML = data.maxtemp_c_2;
  condition3.innerHTML = data.condition_3;
  minTemp3.innerHTML = data.mintemp_c_3;
  maxTemp3.innerHTML = data.maxtemp_c_3;
}

function showDataForecast_F(data) {
  minTemp0.innerHTML = data.mintemp_f_0;
  maxTemp0.innerHTML = data.maxtemp_f_0;
  condition1.innerHTML = data.condition_1;
  minTemp1.innerHTML = data.mintemp_f_1;
  maxTemp1.innerHTML = data.maxtemp_f_1;
  condition2.innerHTML = data.condition_2;
  minTemp2.innerHTML = data.mintemp_f_2;
  maxTemp2.innerHTML = data.maxtemp_f_2;
  condition3.innerHTML = data.condition_3;
  minTemp3.innerHTML = data.mintemp_f_3;
  maxTemp3.innerHTML = data.maxtemp_f_3;
}

export {
  showDataCurrent_C,
  showDataCurrent_F,
  showDataForecast_C,
  showDataForecast_F,
};
