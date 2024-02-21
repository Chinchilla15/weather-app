/* eslint-disable prefer-destructuring */
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
const weatherIcon0 = document.getElementById("weather-icon-0");

// DOM elements for forecast
const weatherIcon1 = document.getElementById("weather-icon-1");
const weatherIcon2 = document.getElementById("weather-icon-2");
const condition1 = document.getElementById("condition-1");
const minTemp1 = document.getElementById("min-temp-1");
const maxTemp1 = document.getElementById("max-temp-1");
const condition2 = document.getElementById("condition-2");
const minTemp2 = document.getElementById("min-temp-2");
const maxTemp2 = document.getElementById("max-temp-2");

const tempImg = document.getElementById("temp-img");
const feelsLikeImg = document.getElementById("feels-like-img");

function showDataCurrent(data) {
  weatherIcon0.src = `./images/${data.iconFileName}`;
  locationName.innerHTML = `${data.name}, ${data.country}`;
  condition.innerHTML = data.condition;
  temp.innerHTML = data.temperatureData;
  feelsLike.innerHTML = data.feelsLike;
  humidity.innerHTML = data.humidity;
  wind.innerHTML = data.windKph;
  precipitation.innerHTML = data.precipMm;
  uvIndex.innerHTML = data.uv;
  tempImg.src = `./images/${data.temperatureUnit}.svg`;
  feelsLikeImg.src = `./images/thermometer-${data.temperatureUnit}.svg`;
}

function showDataForecast(data) {
  minTemp0.innerHTML = data.mintemp[0];
  maxTemp0.innerHTML = data.maxtemp[0];
  weatherIcon1.src = `./images/${data.iconFileName[1]}`;
  condition1.innerHTML = data.condition[1];
  minTemp1.innerHTML = data.mintemp[1];
  maxTemp1.innerHTML = data.maxtemp[1];
  weatherIcon2.src = `./images/${data.iconFileName[2]}`;
  condition2.innerHTML = data.condition[2];
  minTemp2.innerHTML = data.mintemp[2];
  maxTemp2.innerHTML = data.maxtemp[2];
}

const iconMap = {
  1000: "clear-day.svg", // Sunny / Clear
  1003: "partly-cloudy-day.svg", // Partly cloudy
  1006: "cloudy.svg", // Cloudy
  1009: "overcast.svg", // Overcast
  1030: "overcast-day.svg", // Mist
  1063: "rain.svg", // Patchy rain possible
  1066: "snowflake.svg", // Patchy snow possible
  1069: "snowflake.svg", // Patchy sleet possible
  1072: "drizzle.svg", // Patchy freezing drizzle possible
  1087: "thunderstorms-rain.svg", // Thundery outbreaks possible
  1114: "snowflake.svg", // Blowing snow
  1117: "snowflake.svg", // Blizzard
  1135: "overcast-day.svg", // Fog
  1147: "overcast-day.svg", // Freezing fog
  1150: "drizzle.svg", // Patchy light drizzle
  1153: "drizzle.svg", // Light drizzle
  1168: "drizzle.svg", // Freezing drizzle
  1171: "drizzle.svg", // Heavy freezing drizzle
  1180: "rain.svg", // Patchy light rain
  1183: "rain.svg", // Light rain
  1186: "rain.svg", // Moderate rain at times
  1189: "rain.svg", // Moderate rain
  1192: "rain.svg", // Heavy rain at times
  1195: "rain.svg", // Heavy rain
  1198: "drizzle.svg", // Light freezing rain
  1201: "rain.svg", // Moderate or heavy freezing rain
  1204: "snowflake.svg", // Light sleet
  1207: "snowflake.svg", // Moderate or heavy sleet
  1210: "snowflake.svg", // Patchy light snow
  1213: "snowflake.svg", // Light snow
  1216: "snowflake.svg", // Patchy moderate snow
  1219: "snowflake.svg", // Moderate snow
  1222: "snowflake.svg", // Patchy heavy snow
  1225: "snowflake.svg", // Heavy snow
  1237: "snowflake.svg", // Ice pellets
  1240: "rain.svg", // Light rain shower
  1243: "rain.svg", // Moderate or heavy rain shower
  1246: "rain.svg", // Torrential rain shower
  1249: "snowflake.svg", // Light sleet showers
  1252: "snowflake.svg", // Moderate or heavy sleet showers
  1255: "snowflake.svg", // Light snow showers
  1258: "snowflake.svg", // Moderate or heavy snow showers
  1261: "snowflake.svg", // Light showers of ice pellets
  1264: "snowflake.svg", // Moderate or heavy showers of ice pellets
  1273: "thunderstorms-rain.svg", // Patchy light rain with thunder
  1276: "thunderstorms-rain.svg", // Moderate or heavy rain with thunder
  1279: "thunderstorms.svg", // Patchy light snow with thunder
  1282: "thunderstorms.svg", // Moderate or heavy snow with thunder
  // Default for missing or unmatched codes
  default: "not-available.svg",
};

export { showDataCurrent, showDataForecast, iconMap };
