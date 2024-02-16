const ApiKey = "59d1ace8b6504eab8cf182808240702";
/*
function showData(data) {
  p.innerHTML = data.name;
  img.src = data.condition.icon;
}
*/
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
    region: data.location.region,
    condition: data.current.condition,
    uv: data.current.uv,
    precipMm: data.current.precip_mm,
    precipInch: data.current.precip_in,
  };
  console.log(dataArray);
  // showData(dataArray);
  return { dataArray };
}

function processForecastData(data) {
  const forecastDataArray = {
    maxtemp_c_0: data.forecast.forecastday[0].day.maxtemp_c,
    mintemp_c_0: data.forecast.forecastday[0].day.mintemp_c,
    maxtemp_f_0: data.forecast.forecastday[0].day.maxtemp_f,
    mintemp_f_0: data.forecast.forecastday[0].day.mintemp_f,
    maxtemp_c_1: data.forecast.forecastday[1].day.maxtemp_c,
    mintemp_c_1: data.forecast.forecastday[1].day.mintemp_c,
    maxtemp_f_1: data.forecast.forecastday[1].day.maxtemp_f,
    mintemp_f_1: data.forecast.forecastday[1].day.mintemp_f,
    maxtemp_c_2: data.forecast.forecastday[2].day.maxtemp_c,
    mintemp_c_2: data.forecast.forecastday[2].day.mintemp_c,
    maxtemp_f_2: data.forecast.forecastday[2].day.maxtemp_f,
    mintemp_f_2: data.forecast.forecastday[2].day.mintemp_f,
  };
  console.log(forecastDataArray);
}

async function getData(location) {
  // console.log(location);

  if (location === "") {
    console.log("Please enter a location ");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${location}&days=3`,
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
      `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${location}&days=3`,
      { mode: "cors" },
    );
    const forecastData = await response.json();
    processForecastData(forecastData);
  } catch (err) {
    console.log(err);
  }
}

export { getData, getForecast };
