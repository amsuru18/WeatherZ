# WeatherZ

A simple, modern weather app that fetches real-time weather data using the OpenWeatherMap API.

## Features

- Search for current weather by city name
- City autocomplete suggestions as you type
- Light/Dark theme toggle
- Responsive, single-page layout

## Setup

1. **Clone or download this repository.**
2. **Get a free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).**
3. **Open `script.js` and replace the `apiKey` value with your own key:**
   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```
4. **Open `index.html` in your browser.**

## Usage

- Enter a city name in the search bar. Suggestions will appear as you type.
- Select a city or finish typing and click "Get Weather".
- View the current weather, temperature, and icon for the selected city.
- Toggle between light and dark themes using the button in the header.

## Notes

- The app uses the free tier of OpenWeatherMap, which has request limits. If you see errors, wait a minute and try again.
- For best results, use a modern browser.

## License

MIT
