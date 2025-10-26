import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import useWeather from '../hooks/useWeather';

const WeatherCard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { data, loading, error } = useWeather();
  
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getWeatherIcon = (condition) => {
    if (!condition) return '🌈';
    
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return '☀️';
    } else if (conditionLower.includes('cloud')) {
      return '☁️';
    } else if (conditionLower.includes('rain')) {
      return '🌧️';
    } else if (conditionLower.includes('snow')) {
      return '❄️';
    } else if (conditionLower.includes('storm')) {
      return '⛈️';
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
      return '🌫️';
    } else {
      return '🌈';
    }
  };

  if (loading) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌤️</span>
          Current Weather
        </h2>
        <div className="animate-pulse">
          <div className="space-y-3">
            <div className="h-8 bg-gray-400 rounded w-1/2"></div>
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌤️</span>
          Current Weather
        </h2>
        <div className={`p-4 rounded-lg ${
          isDark ? 'bg-red-900/50 text-red-200' : 'bg-red-50 text-red-700'
        }`}>
          <p className="font-medium">Error loading weather data</p>
          <p className="text-sm mt-1">{error}</p>
          <p className="text-sm mt-2">Please allow location access or check your connection</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h2 className="text-xl font-bold mb-4">Current Weather</h2>
        <p>No weather data available</p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">🌤️</span>
        Current Weather
      </h2>

      {/* Current Time */}
      <div className={`text-center mb-6 p-3 rounded-lg ${
        isDark ? 'bg-blue-900/30' : 'bg-blue-50'
      }`}>
        <div className="text-sm opacity-75">Current Time</div>
        <div className="text-xl font-mono font-bold">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Location and Temperature */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">
            {Math.round(data.temperature)}°C
          </h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {data.city}, {data.country}
          </p>
        </div>
        <div className="text-4xl">
          {getWeatherIcon(data.description)}
        </div>
      </div>

      {/* Weather Condition */}
      <div className={`text-center mb-4 p-2 rounded ${
        isDark ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <p className="font-medium capitalize">
          {data.description}
        </p>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Feels Like</div>
          <div className="font-semibold">
            {Math.round(data.feelsLike)}°C
          </div>
        </div>
        
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Humidity</div>
          <div className="font-semibold">{data.humidity}%</div>
        </div>
        
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Wind Speed</div>
          <div className="font-semibold">
            {data.wind} km/h
          </div>
        </div>
        
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Pressure</div>
          <div className="font-semibold">
            {data.pressure} mb
          </div>
        </div>
      </div>

      {/* Visibility and Observation Time */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Visibility</div>
          <div className="font-semibold">
            {data.visibility} km
          </div>
        </div>
        
        <div className={`p-3 rounded-lg ${
          isDark ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="text-sm opacity-75">Last Update</div>
          <div className="font-semibold text-sm">
            {data.observationTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;