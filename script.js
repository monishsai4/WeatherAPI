const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.getElementById("inputValue");
const apikey = "26ad67ebd2ad988477d8b934cd4c90a0";
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherData(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.log.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});
function goToFIll() {}
async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const response = await fetch(apiUrl);
  return await response.json();
}

function displayWeatherData(data) {
  const {
    name: city,
    wind: { speed },
    visibility: value,
    main: { temp, humidity, pressure },
    sys: { sunrise, sunset },
    weather: [{ description }],
  } = data;
  var divElement = document.getElementById("Locate");
  divElement.textContent = city;
  var divLocate = document.getElementById("GetTemp");
  const Celsius = temp - 273.15;
  divLocate.innerHTML = Math.trunc(Celsius);
  var divDescription = document.getElementById("getType");
  divDescription.innerHTML = description;
  var divhumidity = document.getElementById("Humiditt");
  divhumidity.innerHTML = humidity;
  var divpressure = document.getElementById("Pressuree");
  divpressure.innerHTML = pressure;
  var divsunrise = document.getElementById("sunrise");
  divsunrise.innerHTML = sunrise;
  var divsunset = document.getElementById("sunset");
  divsunset.innerHTML = sunset;
  var divspeed = document.getElementById("speed");
  divspeed.innerHTML = speed;
  var divvalue = document.getElementById("value");
  divvalue.innerHTML = value;
}

function displayWeatherInfo(weatherId) {}

function displayError(message) {
  alert(message);
}
