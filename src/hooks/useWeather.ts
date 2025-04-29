'use client';
import { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../lib/api';
import { WeatherData, ForecastData } from '@/models/weather';

export const useWeather = (id: number) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [currentWeather, forecastData] = await Promise.all([
          fetchCurrentWeather(id),
          fetchForecast(id),
        ]);
        
        setWeather(currentWeather);
        setForecast(forecastData);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { weather, forecast, loading, error };
};