'use client';
import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { CurrentWeather } from '@/components/CurrentWeather/CurrentWeather';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { useWeatherSearch } from '@/hooks/useWeatherSearch';

export default function HomePage() {
  const [currentCity, setCurrentCity] = useState('Нижний Новгород');
  const { weather, loading, error } = useWeatherSearch(currentCity);

  const handleSearch = (city: string) => {
    setCurrentCity(city);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Прогноз погоды</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {weather && !loading && !error && (
        <div className="mt-4">
          <CurrentWeather data={weather} />
        </div>
      )}
    </div>
  );
}