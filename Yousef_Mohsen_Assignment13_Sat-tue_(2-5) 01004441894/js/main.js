const APIKey = "f6eee914f48d4173be362630250407";
const LocationInput = document.querySelector(".location-input");
// Fetching Api
async function getWeather(search) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${search}&days=3`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
// Get Current Position From User
function getCurrentPositionAsync() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
async function getLocation() {
  const position = await getCurrentPositionAsync();
  const { latitude, longitude } = position.coords;
  await displayWeather(`${latitude},${longitude}`);
}
getLocation();
// Formatting The Date Of The Weather
function formatDate(date) {
  const weatherDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("eng-GB", {
    weekday: "long",
  }).format(weatherDate);
  return formattedDate;
}
// Determine Direction Of Wind
function windDir(dir) {
  const directions = {
    N: "North",
    NE: "Northeast",
    E: "East",
    SE: "Southeast",
    S: "South",
    SW: "Southwest",
    W: "West",
    NW: "Northwest",
  };

  return directions[dir] || "East";
}

// Display Weather To User
async function displayWeather(value) {
  const weather = await getWeather(value);
  //   Date Variables
  // ************
  const todayDate = formatDate(weather.forecast.forecastday[0].date);
  const formattedMonth = new Intl.DateTimeFormat("eng-GB", {
    month: "long",
    day: "numeric",
  }).format(new Date());
  const tomorrowDate = formatDate(weather.forecast.forecastday[1].date);
  const afterTomorrowDate = formatDate(weather.forecast.forecastday[2].date);
  //   ***********
  // Weather Variables
  // ********
  const direction = windDir(weather.current.wind_dir);
  const windSpeed = weather.current.wind_kph;
  const countryName = weather.location.name;
  const todayTemp = weather.current.temp_c;
  const { icon: todayIcon, text: todayText } = weather.current.condition;
  const { icon: tomorrowIcon, text: tomorrowText } =
    weather.forecast.forecastday[1].day.condition;
  const { maxtemp_c: tomorrowMaxTemp, mintemp_c: tomorrowMinTemp } =
    weather.forecast.forecastday[1].day;
  const { icon: afterTomorrowIcon, text: afterTomorrowText } =
    weather.forecast.forecastday[2].day.condition;
  const { maxtemp_c: afterTomorrowMaxTemp, mintemp_c: afterTomorrowMinTemp } =
    weather.forecast.forecastday[2].day;
  // ********
  const html = `          <div class="col-lg-4">
            <div class="box forecast-today p-3 d-flex flex-column gap-4 align-items-center">
              <div
                class="header d-flex justify-content-between align-items-center"
              >
                <span>${todayDate}</span>
                <span>${formattedMonth}</span>
              </div>
              <div class="content d-flex flex-column gap-4">
                <h2>${countryName}</h2>
                <span class="degree text-white fw-bold">${todayTemp}°C</span>
              <div class=" d-flex flex-column align-items-center">
                
                <img class="w-25" src="${todayIcon}" alt="" />
                                 <p class="text-info">${todayText}</p>
</div>
                <div class="stats d-flex align-items-center gap-3">
                  <div>
                    <img src="imgs/icon-umberella.png" alt="" />
                    <span class="text-white">20%</span>
                  </div>
                  <div>
                    <img src="imgs/icon-wind.png" alt="" />
                    <span class="text-white">${windSpeed}km/h</span>
                  </div>
                  <div>
                    <img src="imgs/icon-compass.png" alt="" />
                    <span class="text-white">${direction}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="box forecast-tomorrow p-3 d-flex flex-column gap-4">
              <div class="header text-center">
                <span>${tomorrowDate}</span>
              </div>
              <div
                class="content d-flex flex-column align-items-center gap-5 h-100 justify-content-center"
              >
                <img src="${tomorrowIcon}" alt="" />
                <div class="d-flex flex-column align-items-center">
                  <span class="degree text-white fw-bold fs-1">${tomorrowMaxTemp}°C</span>
                  <span>${tomorrowMinTemp}°C</span>
                </div>
                <p class="text-info">${tomorrowText}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="box forecast-after-tomorrow p-3 d-flex flex-column gap-4"
            >
              <div class="header text-center">
                <span>${afterTomorrowDate}</span>
              </div>
              <div
                class="content d-flex flex-column align-items-center gap-5 h-100 justify-content-center"
              >
                <img src="${afterTomorrowIcon}" alt="" />
                <div class="d-flex flex-column align-items-center">
                  <span class="degree text-white fw-bold fs-1">${afterTomorrowMaxTemp}°C</span>
                  <span>${afterTomorrowMinTemp}°C</span>
                </div>
                <p class="text-info">${afterTomorrowText}</p>
              </div>
            </div>
          </div>`;
  const weatherContainer = document.querySelector(".forecast .row");
  weatherContainer.innerHTML = html;
}
LocationInput.addEventListener("input", function () {
  displayWeather(this.value);
});
