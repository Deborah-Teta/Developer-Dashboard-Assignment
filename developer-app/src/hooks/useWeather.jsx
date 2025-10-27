import { useState, useEffect } from 'react';

export default function useWeather() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                
                const { latitude, longitude } = position.coords;
                
                const response = await fetch(`https://wttr.in/${latitude},${longitude}?format=j1`);
                
                if (!response.ok) {
                    throw new Error(`Weather API error: ${response.status}`);
                }
                
                const weatherData = await response.json();
                const current = weatherData.current_condition[0];
                
                const weather = {
                    temperature: parseFloat(current.temp_C),
                    description: current.weatherDesc[0].value,
                    city: weatherData.nearest_area[0].areaName[0].value,
                    country: weatherData.nearest_area[0].country[0].value,
                    wind: parseFloat(current.windspeedKmph),
                    humidity: parseFloat(current.humidity),
                    pressure: parseFloat(current.pressure),
                    visibility: parseFloat(current.visibility),
                    feelsLike: parseFloat(current.FeelsLikeC),
                    observationTime: current.observation_time,
                };
                
                setData(weather);
                localStorage.setItem("weather-current", JSON.stringify(weather));
                
            } catch (error) {
                console.error("Weather fetch error:", error);
                setError(error.message);
                
                const cached = localStorage.getItem("weather-current");
                if (cached) {
                    setData(JSON.parse(cached));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);
    
    return { data, loading, error };
}