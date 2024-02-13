const ApiKey = "59d1ace8b6504eab8cf182808240702";
const main = document.querySelector("main");

function showData(data) {
  const p = document.createElement("p");

  p.innerHTML = data;
  main.appendChild(p);
}
function processData(data) {
  const celciusData = data.current.temp_c;
  const country = data.current.location;
  showData(celciusData);
  return { celciusData, country };
}

async function getData(location) {
  console.log(location);

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
    // showData();
  } catch (err) {
    console.log(err);
  }
}

export { getData };

/*
  const celciusData = weatherData.current.temp_c;
  const { country } = weatherData.location;
*/
