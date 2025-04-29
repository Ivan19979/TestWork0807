import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WeatherStore {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (id) => set((state) => ({ 
        favorites: [...state.favorites, id] 
      })),
      removeFavorite: (id) => set((state) => ({ 
        favorites: state.favorites.filter(idCity => idCity !== id) 
      })),
    }),
    {
      name: 'weather-storage',
    }
  )
);