class WeatherCard {
    constructor() {
        this.apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.isCelsius = true;
        this.currentWeather = null;
        
        this.initializeElements();
        this.bindEvents();
        this.loadDefaultWeather();
    }

    initializeElements() {
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.tempSymbol = document.getElementById('tempSymbol');
        this.tempUnit = document.getElementById('tempUnit');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.weatherDesc = document.getElementById('weatherDesc');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.feelsLike = document.getElementById('feelsLike');
        this.visibility = document.getElementById('visibility');
        this.pressure = document.getElementById('pressure');
        this.uvIndex = document.getElementById('uvIndex');
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.tempToggle = document.getElementById('tempToggle');
        this.weatherCard = document.getElementById('weatherCard');
        this.weatherBackground = document.getElementById('weatherBackground');
    }

    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchWeather();
        });
        this.tempToggle.addEventListener('click', () => this.toggleTemperature());
    }

    async loadDefaultWeather() {
        // Default to New York if no geolocation
        await this.getWeatherByCity('New York');
    }

    async searchWeather() {
        const city = this.cityInput.value.trim();
        if (city) {
            await this.getWeatherByCity(city);
            this.cityInput.value = '';
        }
    }

    async getWeatherByCity(city) {
        try {
            this.showLoading();
            
            // For demo purposes, using mock data since API key is required
            // In production, replace this with actual API call
            const weatherData = this.getMockWeatherData(city);
            
            this.currentWeather = weatherData;
            this.updateUI(weatherData);
            this.updateBackground(weatherData.weather[0].main.toLowerCase());
            
        } catch (error) {
            console.error('Error fetching weather:', error);
            this.showError('City not found. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    getMockWeatherData(city) {
        const weatherTypes = [
            { main: 'Clear', description: 'Clear sky', icon: 'fa-sun' },
            { main: 'Clouds', description: 'Partly cloudy', icon: 'fa-cloud' },
            { main: 'Rain', description: 'Light rain', icon: 'fa-cloud-rain' },
            { main: 'Snow', description: 'Light snow', icon: 'fa-snowflake' },
            { main: 'Thunderstorm', description: 'Thunderstorm', icon: 'fa-bolt' },
            { main: 'Drizzle', description: 'Light drizzle', icon: 'fa-cloud-rain' },
            { main: 'Mist', description: 'Mist', icon: 'fa-cloud' }
        ];

        const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        const tempCelsius = Math.floor(Math.random() * 30) + 5; // 5-35°C
        const feelsLike = tempCelsius + Math.floor(Math.random() * 6) - 3; // ±3°C difference

        return {
            name: city,
            main: {
                temp: tempCelsius,
                humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
                pressure: Math.floor(Math.random() * 50) + 990, // 990-1040 hPa
                feels_like: feelsLike
            },
            wind: {
                speed: Math.floor(Math.random() * 20) + 5 // 5-25 km/h
            },
            visibility: Math.floor(Math.random() * 5) + 8, // 8-13 km
            uvIndex: Math.floor(Math.random() * 8) + 1, // 1-8 UV index
            weather: [randomWeather]
        };
    }

    updateUI(data) {
        this.cityName.textContent = data.name;
        
        const tempCelsius = Math.round(data.main.temp);
        const tempFahrenheit = Math.round((tempCelsius * 9/5) + 32);
        const feelsLikeCelsius = Math.round(data.main.feels_like);
        const feelsLikeFahrenheit = Math.round((feelsLikeCelsius * 9/5) + 32);
        
        this.temperature.textContent = this.isCelsius ? tempCelsius : tempFahrenheit;
        this.tempSymbol.textContent = this.isCelsius ? '°C' : '°F';
        this.tempUnit.textContent = this.isCelsius ? '°C' : '°F';
        
        this.weatherIcon.className = `fas ${data.weather[0].icon}`;
        this.weatherDesc.textContent = data.weather[0].description;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${data.wind.speed} km/h`;
        this.feelsLike.textContent = this.isCelsius ? `${feelsLikeCelsius}°C` : `${feelsLikeFahrenheit}°F`;
        this.visibility.textContent = `${data.visibility} km`;
        this.pressure.textContent = `${data.main.pressure} hPa`;
        this.uvIndex.textContent = data.uvIndex;
    }

    toggleTemperature() {
        this.isCelsius = !this.isCelsius;
        
        if (this.currentWeather) {
            const tempCelsius = Math.round(this.currentWeather.main.temp);
            const tempFahrenheit = Math.round((tempCelsius * 9/5) + 32);
            
            this.temperature.textContent = this.isCelsius ? tempCelsius : tempFahrenheit;
            this.tempSymbol.textContent = this.isCelsius ? '°C' : '°F';
            this.tempUnit.textContent = this.isCelsius ? '°C' : '°F';
        }
    }

    updateBackground(weatherType) {
        // Remove all weather classes
        document.body.classList.remove('sunny', 'cloudy', 'rainy', 'snowy', 'stormy', 'clear');
        
        // Add appropriate class based on weather
        switch(weatherType) {
            case 'clear':
                document.body.classList.add('clear');
                break;
            case 'clouds':
                document.body.classList.add('cloudy');
                break;
            case 'rain':
            case 'drizzle':
                document.body.classList.add('rainy');
                break;
            case 'snow':
                document.body.classList.add('snowy');
                break;
            case 'thunderstorm':
                document.body.classList.add('stormy');
                break;
            default:
                document.body.classList.add('sunny');
        }
        
        // Automatically update background photo based on weather
        this.updateWeatherPhoto(weatherType);
    }

    updateWeatherPhoto(weatherType) {
        const photoUrls = {
            sunny: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            cloudy: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop',
            rainy: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=600&fit=crop',
            snowy: 'https://images.unsplash.com/photo-1491002052546-bf38f186d56c?w=800&h=600&fit=crop',
            stormy: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&h=600&fit=crop',
            clear: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
        };

        // Map weather types to photo keys
        const weatherToPhotoMap = {
            'clear': 'clear',
            'clouds': 'cloudy',
            'rain': 'rainy',
            'drizzle': 'rainy',
            'snow': 'snowy',
            'thunderstorm': 'stormy',
            'mist': 'cloudy',
            'fog': 'cloudy'
        };

        const photoKey = weatherToPhotoMap[weatherType] || 'sunny';
        
        if (photoUrls[photoKey]) {
            this.weatherBackground.style.backgroundImage = `url(${photoUrls[photoKey]})`;
            this.weatherBackground.classList.add('active');
        }
    }



    showLoading() {
        this.weatherCard.classList.add('loading');
    }

    hideLoading() {
        this.weatherCard.classList.remove('loading');
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        errorDiv.textContent = message;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => errorDiv.remove(), 300);
        }, 3000);
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the weather card when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherCard();
});

// Add touch support for mobile
document.addEventListener('touchstart', function() {}, {passive: true});

// Handle orientation change for mobile
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Trigger resize to ensure proper layout
        window.dispatchEvent(new Event('resize'));
    }, 100);
});
