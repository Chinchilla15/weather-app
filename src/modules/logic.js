import { showDataCurrent, showDataForecast, iconMap } from "./dom";

const ApiKey = "59d1ace8b6504eab8cf182808240702";

function getIconByCode(code) {
  return iconMap[code] || iconMap.default;
}

function processData(data, displayF) {
  const temperatureUnit = displayF ? "fahrenheit" : "celsius";
  const dataObject = {
    temperatureData: displayF ? data.current.temp_f : data.current.temp_c,
    feelsLike: displayF ? data.current.feelslike_f : data.current.feelslike_c,
    humidity: data.current.humidity,
    windKph: data.current.wind_kph,
    name: data.location.name,
    country: data.location.country,
    condition: data.current.condition.text,
    uv: data.current.uv,
    precipMm: data.current.precip_mm,
    precipInch: data.current.precip_in,
    iconFileName: getIconByCode(data.current.condition.code),
    temperatureUnit,
  };

  showDataCurrent(dataObject);
}

function processForecastData(data, displayF) {
  const temperatureUnit = displayF ? "fahrenheit" : "celsius";
  const forecastDataObject = {
    maxtemp: data.forecast.forecastday.map((day) =>
      displayF ? day.day.maxtemp_f : day.day.maxtemp_c,
    ),
    mintemp: data.forecast.forecastday.map((day) =>
      displayF ? day.day.mintemp_f : day.day.mintemp_c,
    ),
    condition: data.forecast.forecastday.map((day) => day.day.condition.text),
    temperatureUnit,
    iconFileName: data.forecast.forecastday.map((day) =>
      getIconByCode(day.day.condition.code),
    ),
  };

  showDataForecast(forecastDataObject);
}

async function getData(location, displayF = false) {
  if (location === "") {
    console.log("Please enter a location "); // Change this!!
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${location}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    // console.log(weatherData);
    processData(weatherData, displayF);
  } catch (err) {
    console.log(err); // Change Error Handling
  }
}

async function getForecast(location, displayF = false) {
  if (location === "") {
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${location}&days=3`,
      { mode: "cors" },
    );
    const forecastData = await response.json();
    // console.log(forecastData);
    processForecastData(forecastData, displayF);
  } catch (err) {
    console.log(err); // Change Error Handling
  }
}

export { getData, getForecast };
