# Project-Weather-App

A modern weather application that provides real-time weather data and forecasts for any city worldwide.

[**Live Preview**](https://yass-gr.github.io/Project-Weather-App/)

## Features

- **Current Weather** - Display current temperature, conditions, and weather details
- **Hourly Forecast** - 24-hour forecast with temperature and weather icons
- **7-Day Forecast** - Weekly forecast with high/low temperatures
- **Air Conditions** - Feels like temperature, humidity, wind speed, and UV index
- **Unit Toggle** - Switch between Celsius and Fahrenheit
- **City Search** - Search for any city to get weather information
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Loading States** - Smooth loading and error handling

## Tech Stack

- Vanilla JavaScript (ES6+)
- Webpack 5
- CSS3 with custom properties
- Open-Meteo API (free, no API key required)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yass-gr/Project-Weather-App.git
cd Project-Weather-App

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
Project-Weather-App/
├── src/
│   ├── index.html      # Main HTML template
│   ├── index.js        # Application entry point
│   ├── icons.js        # Weather icon mappings
│   └── styles.css      # Application styles
├── dist/               # Production build output
├── package.json        # Dependencies and scripts
└── webpack.config.js   # Webpack configuration
```

## API

This project uses the [Open-Meteo API](https://open-meteo.com/) for weather data. No API key is required.

## License

ISC
