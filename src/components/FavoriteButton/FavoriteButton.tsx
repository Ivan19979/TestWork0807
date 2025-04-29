'use client';
import { useWeatherStore } from '@/stores/weatherStore';
import styles from './FavoriteButton.module.scss';

interface FavoriteButtonProps {
  id: number;
}

export const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const { favorites, addFavorite, removeFavorite } = useWeatherStore();
  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`btn btn-sm ${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
      aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
    </button>
  );
};