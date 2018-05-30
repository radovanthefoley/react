import axios from 'axios';

const API_KEY = '2f0ee1dbdc989bfbe7952543cb3ff00c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},sk&units=metric`;
  // this is Promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
    meta: {
      city: city
    }
  };
}

export function removeWeather(weather) {
  console.log('removeWeather: ' + weather);
  return {type: REMOVE_WEATHER, payload: weather};
}
