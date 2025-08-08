# Weather Card - Responsive Weather Application

A beautiful, responsive weather card application that displays current weather information for any city. Features a clean, modern design with dynamic backgrounds that change based on weather conditions.

## 🌟 Features

### Core Features
- **City Weather Display**: Shows current weather for any city
- **Temperature Toggle**: Switch between Celsius and Fahrenheit
- **Dynamic Backgrounds**: Background changes based on weather conditions
- **Weather Icons**: Visual representation of weather types
- **Weather Details**: Humidity and wind speed information

### Design Features
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Clean UI**: Modern, minimalist design with excellent visual hierarchy
- **Smooth Animations**: Fade-in effects and hover animations
- **Glass Morphism**: Semi-transparent card with backdrop blur
- **Weather-Based Theming**: Different color schemes for different weather types

### Mobile Responsiveness
- **Mobile-First Design**: Optimized for smaller screens
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Orientation Support**: Handles device orientation changes
- **Responsive Layout**: Adapts to different screen sizes

## 🎨 Weather Background Themes

The application features dynamic backgrounds that change based on weather conditions:

- **☀️ Sunny**: Warm orange-pink gradient
- **☁️ Cloudy**: Soft blue-gray gradient  
- **🌧️ Rainy**: Cool blue-purple gradient
- **❄️ Snowy**: Light purple-pink gradient
- **⛈️ Stormy**: Dark gray gradient
- **🌤️ Clear**: Bright blue gradient

## 📱 Mobile Responsive Features

### Desktop Version (400px+)
- Full card layout with side-by-side details
- Larger text and icons
- Horizontal search bar

### Mobile Version (<480px)
- Compact card layout
- Stacked detail items
- Vertical search bar
- Smaller text and icons
- Optimized touch targets

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Font Awesome icons

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start searching for cities!

### File Structure
```
weather-card/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🔧 Configuration

### API Integration
To use real weather data, replace the mock data in `script.js`:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace `'YOUR_API_KEY'` in the `WeatherCard` constructor
3. Uncomment the API call in the `getWeatherByCity` method

```javascript
// Replace this line in script.js
this.apiKey = 'YOUR_ACTUAL_API_KEY';

// And uncomment the API call:
const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
const weatherData = await response.json();
```

## 🎯 Usage

### Basic Usage
1. **Search for a City**: Type a city name in the search box
2. **Toggle Temperature**: Click the temperature unit button to switch between °C and °F
3. **View Weather Details**: See humidity, wind speed, and weather description

### Features in Action
- **Dynamic Backgrounds**: Background automatically changes based on weather
- **Responsive Design**: Card adapts to screen size
- **Smooth Animations**: Loading states and transitions
- **Error Handling**: User-friendly error messages

## 🎨 Design Principles

### Visual Hierarchy
- **Primary**: Temperature (largest, boldest)
- **Secondary**: City name and weather icon
- **Tertiary**: Weather description and details
- **Quaternary**: Search functionality

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Background**: Weather-dependent gradients
- **Text**: Dark gray (#333) for readability
- **Accents**: Weather-appropriate colors

### Typography
- **Font Family**: Segoe UI (system font stack)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Sizing**: Scales appropriately for mobile

## 📱 Mobile Optimization

### Touch Targets
- Minimum 44px touch targets
- Adequate spacing between interactive elements
- Clear visual feedback on touch

### Performance
- Optimized animations for mobile
- Efficient CSS transitions
- Minimal JavaScript overhead

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios

## 🔮 Future Enhancements

### Planned Features
- **Geolocation**: Auto-detect user's location
- **Forecast**: Multi-day weather forecast
- **Weather Maps**: Interactive weather maps
- **Notifications**: Weather alerts and notifications
- **Offline Support**: Service worker for offline functionality

### Technical Improvements
- **Real API Integration**: Connect to actual weather APIs
- **PWA Support**: Progressive Web App capabilities
- **Dark Mode**: Toggle between light and dark themes
- **Localization**: Multi-language support

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the design
- Adding new weather themes
- Enhancing mobile responsiveness

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Font Awesome**: For weather icons
- **OpenWeatherMap**: For weather data API
- **CSS Gradients**: For beautiful background effects
- **Modern CSS**: For responsive design features

---

**Enjoy your weather card!** 🌤️
