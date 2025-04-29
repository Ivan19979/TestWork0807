import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      id: id,
      appid: API_KEY,
      units: 'metric',
      lang: 'ru',
    },
  });  
  return response.data;
};

export const fetchSearchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'ru',
    },
  });  
  console.log(response.data);

  return response.data;
};

export const fetchForecast = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      id: id,
      appid: API_KEY,
      units: 'metric',
      lang: 'ru',
      cnt: 40,
    },
  });
  return response.data;
};