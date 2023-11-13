export async function getWeatherData() {
    const locationInput = document.querySelector("#location-input");
    const location = locationInput.value
    try {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=4229da1fa8634657a15151120230811&q=${location}&aqi=no`);
        const weather = await weatherData.json();
        const processedWeather = processWeather(weather);
        displayWeatherUI(processedWeather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    locationInput.value = "";
}

function processWeather(weather) {
    return {
        country: weather.location.country,
        city: weather.location.name,
        todayTemp: weather.current.temp_c,
        humidity: weather.current.humidity,
        todayFeels: weather.current.feelslike_c,
        precip: weather.current.precip_mm,
        windSpeed: weather.current.wind_kph
    }    
}




