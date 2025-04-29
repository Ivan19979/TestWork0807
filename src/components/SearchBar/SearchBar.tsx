import { useState } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Введите название города"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
};