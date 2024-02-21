/* eslint-disable camelcase */
import {
  showDataCurrent_C,
  showDataCurrent_F,
  showDataForecast_C,
  showDataForecast_F,
} from "./dom";

const ApiKey = "59d1ace8b6504eab8cf182808240702";

function processData(data, displayF) {
  const dataObject_C = {
    celciusData: data.current.temp_c,
    feelsLikeC: data.current.feelslike_c,
    humidity: data.current.humidity,
    windKph: data.current.wind_kph,
    name: data.location.name,
    country: data.location.country,
    condition: data.current.condition.text,
    uv: data.current.uv,
    precipMm: data.current.precip_mm,
    precipInch: data.current.precip_in,
  };

  const dataObject_F = {
    fahrenheitData: data.current.temp_f,
    feelsLikeF: data.current.feelslike_f,
    humidity: data.current.humidity,
    windKph: data.current.wind_kph,
    name: data.location.name,
    country: data.location.country,
    condition: data.current.condition.text,
    uv: data.current.uv,
    precipMm: data.current.precip_mm,
    precipInch: data.current.precip_in,
  };

  if (displayF) {
    showDataCurrent_F(dataObject_F);
  } else {
    showDataCurrent_C(dataObject_C);
  }
}

function processForecastData(data, displayF) {
  const forecastDataObject_C = {
    maxtemp_c_0: data.forecast.forecastday[0].day.maxtemp_c,
    mintemp_c_0: data.forecast.forecastday[0].day.mintemp_c,
    condition_0: data.forecast.forecastday[0].day.condition.text,
    maxtemp_c_1: data.forecast.forecastday[1].day.maxtemp_c,
    mintemp_c_1: data.forecast.forecastday[1].day.mintemp_c,
    condition_1: data.forecast.forecastday[1].day.condition.text,
    maxtemp_c_2: data.forecast.forecastday[2].day.maxtemp_c,
    mintemp_c_2: data.forecast.forecastday[2].day.mintemp_c,
    condition_2: data.forecast.forecastday[2].day.condition.text,
  };

  const forecastDataObject_F = {
    maxtemp_f_0: data.forecast.forecastday[0].day.maxtemp_f,
    mintemp_f_0: data.forecast.forecastday[0].day.mintemp_f,
    maxtemp_f_1: data.forecast.forecastday[1].day.maxtemp_f,
    mintemp_f_1: data.forecast.forecastday[1].day.mintemp_f,
    maxtemp_f_2: data.forecast.forecastday[2].day.maxtemp_f,
    mintemp_f_2: data.forecast.forecastday[2].day.mintemp_f,
    condition_0: data.forecast.forecastday[0].day.condition.text,
    condition_1: data.forecast.forecastday[1].day.condition.text,
    condition_2: data.forecast.forecastday[2].day.condition.text,
  };

  if (displayF) {
    showDataForecast_F(forecastDataObject_F);
  } else {
    showDataForecast_C(forecastDataObject_C);
  }
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
