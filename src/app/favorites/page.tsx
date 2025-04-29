'use client';
import { useWeatherStore } from '@/stores/weatherStore';
import { CityCard } from '@/components/CityCard/CityCard';

export default function FavoritesPage() {
  const { favorites } = useWeatherStore();
  
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Избранные города</h1>
      
      {favorites.length === 0 ? (
        <div className="alert alert-info">
          У вас пока нет любимых городов. Найдите город и добавьте его в избранное.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {favorites.map((favorite: number) => (
            <div key={favorite} className="col">
              <CityCard id={favorite} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}