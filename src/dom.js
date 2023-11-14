export function displayWeatherUI(weather){
    const location = document.querySelector(".location");
    location.textContent = `${weather.city},${weather.country}`;

    const icon = document.querySelector(".icon");
    icon.src = weather.weatherIcon;

    const currentTemp =  document.querySelector(".current-temp");
    currentTemp.textContent = `${weather.todayTemp}ºC`;

    const weatherText = document.querySelector(".weather-text");
    weatherText.textContent = weather.weatherText;

    const feelsLike = document.querySelector(".feels-like");
    feelsLike.textContent = `Feels ${weather.todayFeels}ºC`;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = `${weather.humidity}%`;

    const windSpeed = document.querySelector("#wind-speed");
    windSpeed.textContent = `${weather.windSpeed}km/h`;

    const uv = document.querySelector("#uv");
    uv.textContent = weather.uv;
}
