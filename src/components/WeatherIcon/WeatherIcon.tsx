import styles from './WeatherIcon.module.scss';

interface WeatherIconProps {
  code: string;
  size?: number;
}

export const WeatherIcon = ({ code, size = 64 }: WeatherIconProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={iconUrl} 
      alt="Weather icon" 
      className={styles.weatherIcon}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};