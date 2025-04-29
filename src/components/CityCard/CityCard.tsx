import Link from 'next/link';
import { useWeather } from '../../hooks/useWeather';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import styles from './CityCard.module.scss';

interface CityCardProps {
  id: number;
}

export const CityCard = ({ id }: CityCardProps) => {
  const { weather, loading } = useWeather(id);

  return (
    <div className={`card ${styles.cityCard}`}>
      {loading ? (
        <div className="card-body text-center">
          <LoadingSpinner small />
        </div>
      ) : (
        weather && (
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3 className="card-title mb-0">
                {weather.name}
              </h3>
              <FavoriteButton id={id} />
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <WeatherIcon code={weather.weather[0].icon} size={48} />
              <div className="text-end">
                <h4 className="mb-0">{Math.round(weather.main.temp)}°C</h4>
                <small className="text-capitalize">
                  {weather.weather[0].description}
                </small>
              </div>
            </div>

            <Link 
              href={`/${id}`} 
              className="stretched-link"
              aria-label={`Посмотреть погоду для ${id}`}
            />
          </div>
        )
      )}
    </div>
  );
};