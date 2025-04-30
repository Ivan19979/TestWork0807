import styles from './SearchBar.module.scss';
import { useTemporaryStore } from '@/stores/weatherStore';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { search, setSearch } = useTemporaryStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Введите название города"
          value={search}
          onChange={(e) => setSearch(e.target.value.trim())}
        />
        <button className="btn btn-primary" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
};