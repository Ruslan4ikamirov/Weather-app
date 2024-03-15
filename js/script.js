const apiKey = '7632d0c985783c5e2a7a9a8855e7d6df';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const weatherIcon = document.querySelector('.weather-icon');
const inputBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector('error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        const data = await response.json();
        console.log(data);
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'img/clouds.png';
        }   
        if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'img/clear.png';
        }   
        if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png';
        }   
        if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'img/mist.png';
        }   
        if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'img/rain.png';
        }   
        if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'img/snow.png';
        }  
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none'; 
    }
}

searchButton.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
