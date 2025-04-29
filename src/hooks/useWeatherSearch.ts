'use client';
import { useState, useEffect } from 'react';
import { fetchSearchWeather } from '../lib/api';
import { WeatherData } from '@/models/weather';

export const useWeatherSearch = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const currentWeather = await fetchSearchWeather(city);
        setWeather(currentWeather);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weather, loading, error };
};