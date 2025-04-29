'use client';
import { notFound } from 'next/navigation';
import { DailyForecast } from '@/components/DailyForecast/DailyForecast';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { useWeather } from '@/hooks/useWeather';
import { use } from 'react';

interface ForecastPageProps {
  params: Promise<{
    id: string;
  }>
}

export default function ForecastPage({ params }: ForecastPageProps) {
  const { id } = use(params);
  const { forecast, loading, error } = useWeather(Number(id));

  if (error) {
    return notFound();
  }

  return (
    <div className="container py-4">
      {forecast && <h1 className="text-center mb-4">Погода на 5 дней в городе {decodeURIComponent(forecast.city.name)}</h1>}
      
      {loading && <LoadingSpinner />}
      
      {forecast && !loading && (
        <DailyForecast data={forecast} />
      )}
    </div>
  );
}