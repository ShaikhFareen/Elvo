
async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const div = document.getElementById('weatherInfo');

    if (!city) {
        div.innerHTML = "Please enter a city.";
        return;
    }

    div.innerHTML = "Loading...";

    try {
        // Fetch from free public API
        const response = await fetch(`https://goweather.herokuapp.com/weather/${encodeURIComponent(city)}`);
        const data = await response.json();

        if (!data || !data.temperature) {
            throw new Error("City not found");
        }

        div.innerHTML = `
            <p><strong>${city}</strong></p>
            <p>Temperature: ${data.temperature}</p>
            <p>Condition: ${data.description}</p>
            <p>Wind: ${data.wind}</p>
        `;
    } catch (error) {
        console.error(error);
        div.innerHTML = "Error fetching weather data: " + error.message;
    }
}

