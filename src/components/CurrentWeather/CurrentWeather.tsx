import { WeatherData } from "@/models/weather";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import styles from "./CurrentWeather.module.scss";
import Link from "next/link";

interface CurrentWeatherProps {
  data: WeatherData;
}

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  return (
    <div className={`card ${styles.currentWeather}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="card-title">{data.name}</h2>
          <FavoriteButton id={data.id} />
        </div>

        <div className="d-flex align-items-center my-3">
          <WeatherIcon code={data.weather[0].icon} size={64} />
          <div className="ms-3">
            <h3 className="mb-0">{Math.round(data.main.temp)}°C</h3>
            <p className="text-capitalize mb-0">
              {data.weather[0].description}
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <p>Ощущается как: {Math.round(data.main.feels_like)}°C</p>
            <p>Влажность: {data.main.humidity}%</p>
          </div>
          <div className="col-md-6">
            <p>Ветер: {data.wind.speed} m/s</p>
            <p>Давление: {data.main.pressure} hPa</p>
          </div>
        </div>
        <div className="mt-3">
          <Link
            href={`/forecast/${data.id}`}
            className="btn btn-sm btn-outline-success"
          >
            Просмотр прогноза на 5 дней
          </Link>
        </div>
      </div>
    </div>
  );
};
