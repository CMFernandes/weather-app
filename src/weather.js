import { displayWeatherUI } from "./dom";

export async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4229da1fa8634657a15151120230811&q=${location}&aqi=no`);
        const weather = await response.json();
        const processedWeather = processWeather(weather);
        displayWeatherUI(processedWeather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function processWeather(weather) {
    return {
        country: weather.location.country,
        city: weather.location.name,
        weatherText: weather.current.condition.text,
        weatherIcon: weather.current.condition.icon,
        todayTemp: weather.current.temp_c,
        humidity: weather.current.humidity,
        todayFeels: weather.current.feelslike_c,
        windSpeed: weather.current.wind_kph,
        maxTemp: weather.forecast.forecastday[0].day.maxtemp_c,
        minTemp: weather.forecast.forecastday[0].day.mintemp_c,
        uv: weather.forecast.forecastday[0].day.uv
    }    
}




