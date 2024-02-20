const ApiKey = "59d1ace8b6504eab8cf182808240702";
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

function showDataCurrent(data) {
  locationName.innerHTML = `${data.name}, ${data.country}`;
  condition.innerHTML = data.condition;
  temp.innerHTML = data.celciusData;
  feelsLike.innerHTML = data.feelsLikeC;
  humidity.innerHTML = data.humidity;
  wind.innerHTML = data.windKph;
  precipitation.innerHTML = data.precipMm;
  uvIndex.innerHTML = data.uv;
}

function showDataForecast(data) {
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

function showDataFahren(data) {
  // temp.innerHTML = data.fahrenheitData;
  // feelsLike.innerHTML = data.feelsLikeF;
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

function processData(data) {
  const dataArray = {
    celciusData: data.current.temp_c,
    fahrenheitData: data.current.temp_f,
    feelsLikeC: data.current.feelslike_c,
    feelsLikeF: data.current.feelslike_f,
    humidity: data.current.humidity,
    windKph: data.current.wind_kph,
    windMph: data.current.wind_mph,
    name: data.location.name,
    country: data.location.country,
    condition: data.current.condition.text,
    uv: data.current.uv,
    precipMm: data.current.precip_mm,
    precipInch: data.current.precip_in,
  };
  console.log(dataArray);
  showDataCurrent(dataArray);
  return { dataArray };
}

function processForecastData(data) {
  const forecastDataArray = {
    maxtemp_c_0: data.forecast.forecastday[0].day.maxtemp_c,
    mintemp_c_0: data.forecast.forecastday[0].day.mintemp_c,
    maxtemp_f_0: data.forecast.forecastday[0].day.maxtemp_f,
    mintemp_f_0: data.forecast.forecastday[0].day.mintemp_f,
    condition_0: data.forecast.forecastday[0].day.condition.text,
    maxtemp_c_1: data.forecast.forecastday[1].day.maxtemp_c,
    mintemp_c_1: data.forecast.forecastday[1].day.mintemp_c,
    maxtemp_f_1: data.forecast.forecastday[1].day.maxtemp_f,
    mintemp_f_1: data.forecast.forecastday[1].day.mintemp_f,
    condition_1: data.forecast.forecastday[1].day.condition.text,
    maxtemp_c_2: data.forecast.forecastday[2].day.maxtemp_c,
    mintemp_c_2: data.forecast.forecastday[2].day.mintemp_c,
    maxtemp_f_2: data.forecast.forecastday[2].day.maxtemp_f,
    mintemp_f_2: data.forecast.forecastday[2].day.mintemp_f,
    condition_2: data.forecast.forecastday[2].day.condition.text,
    maxtemp_c_3: data.forecast.forecastday[3].day.maxtemp_c,
    mintemp_c_3: data.forecast.forecastday[3].day.mintemp_c,
    maxtemp_f_3: data.forecast.forecastday[3].day.maxtemp_f,
    mintemp_f_3: data.forecast.forecastday[3].day.mintemp_f,
    condition_3: data.forecast.forecastday[3].day.condition.text,
  };
  console.log(forecastDataArray);
  showDataForecast(forecastDataArray);
}

async function getData(location) {
  // console.log(location);

  if (location === "") {
    console.log("Please enter a location ");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${location}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    console.log(weatherData);
    processData(weatherData);
  } catch (err) {
    console.log(err);
  }
}

async function getForecast(location) {
  if (location === "") {
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${location}&days=4`,
      { mode: "cors" },
    );
    const forecastData = await response.json();
    console.log(forecastData);
    processForecastData(forecastData);
  } catch (err) {
    console.log(err);
  }
}

export { getData, getForecast, showDataCurrent };
