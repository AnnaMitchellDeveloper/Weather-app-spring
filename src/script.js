const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "48f2be43fdb3ad1de3a0522f077c365b",
};
const input = document.querySelector("#inputField");
input.addEventListener("keydown", enter);

//* Function to get info from input field *//
function enter(event) {
  if (event.keyCode === 13) {
    getInfo(input.value);
  }
}
//* Function to get results from API *//
async function getInfo(data) {
  const getInfoResult = await fetch(
    `${api.endpoint}weather?q=${data}&units=imperial&appID=${api.key}`
  );
  const weatherResult = await getInfoResult.json();
  displayResult(weatherResult);
}
//* Function to show info on the screen *//
function displayResult(weatherResult) {
  let city = document.querySelector("#city");
  city.textContent = `${weatherResult.name}, ${weatherResult.sys.country}`;

  getCurrentDate();

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(weatherResult.main.temp)}°F`;
  let feelsLike = document.querySelector("#feelsLike");
  feelsLike.innerHTML = `Feels like ${Math.round(
    weatherResult.main.feels_like
  )}°F`;
  let conditions = document.querySelector("#conditions");
  conditions.innerHTML = `${weatherResult.weather[0].main}`;
  let variation = document.querySelector("#variation");
  variation.innerHTML = `Min:${Math.round(
    weatherResult.main.temp_min
  )}°F  Max:${Math.round(weatherResult.main.temp_max)}°F`;
}
//* Function to show current date *//
function getCurrentDate() {
  const currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let daysOfWeek = days[currentDate.getDay()];
  let todayDate = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();
  let fullCurrentDate = document.querySelector("#date");
  fullCurrentDate.innerHTML = `${daysOfWeek} ${todayDate}, ${month} ${year}`;
  
}
