function loadWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}, Temp: ${data.main.temp}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
