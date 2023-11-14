import { getWeatherData } from "./weather";

function getLocation(){
    const locationInput = document.querySelector("#location-input");
    const location = locationInput.value
    getWeatherData(location)
    locationInput.value = "";
}

const searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener('click', getLocation)

getWeatherData("lisboa")