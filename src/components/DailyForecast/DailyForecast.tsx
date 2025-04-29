import { ForecastData } from '../../models/weather';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import styles from './DailyForecast.module.scss';
import Link from 'next/link';

interface DailyForecastProps {
  data: ForecastData;
}

export const DailyForecast = ({ data }: DailyForecastProps) => {
  // Группируем прогноз по дням
  const dailyData = data.list.reduce((acc: Record<string, typeof data.list>, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('ru-RU', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
    
    if (!acc[date]) {
      acc[date] = [];
    }
    
    acc[date].push(item);
    return acc;
  }, {});
  console.log(dailyData);
  
  return (
    <div className={styles.forecastContainer}>
      {Object.entries(dailyData).map(([date, items]) => (
        <div key={date} className={`card mb-4 ${styles.dayCard}`}>
          <div className="card-header bg-primary text-white">
            <h3 className={`mb-0 ${styles.textCapitalize}`}>{date}</h3>
          </div>
          <div className="card-body">
            <div className="row">
              {items.map((item) => {
                const time = new Date(item.dt * 1000).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                
                return (
                  <div key={item.dt} className="col-6 col-md-4 col-lg-3 mb-3">
                    <div className={styles.timeSlot}>
                      <div className={styles.time}>{time}</div>
                      <WeatherIcon code={item.weather[0].icon} size={40} />
                      <div className={styles.temp}>{Math.round(item.main.temp)}°C</div>
                      <div className={styles.description}>
                        {item.weather[0].description}
                      </div>
                      <div className="mt-2 small">
                        <span className="me-2">
                          <i className="bi bi-droplet"></i> {item.main.humidity}%
                        </span>
                        <span>
                          <i className="bi bi-wind"></i> {item.wind.speed} m/s
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center mt-4">
        <Link href="/" className="btn btn-outline-primary">
          На главную
        </Link>
      </div>
    </div>
  );
};