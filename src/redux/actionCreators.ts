import { WeatherAction, WeatherActionTypes } from './types';
import { Dispatch } from "react"
import axios from 'axios';

export const fetchWeather = (q: string = 'London') => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER })

      const URL = 'https://api.openweathermap.org/data/2.5/weather'
      const response = await axios.get(URL, { params: { q, appid: '0d06076b7213ef33470fda4d7e2d78f6' } })

      setTimeout(() => {
        dispatch({ type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data })
      }, 1000)
    } catch (e) {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: 'Произошла ошибка при загрузке' })
    }
  }
}

export const closeCity = (id: number) => {
  return { type: WeatherActionTypes.CLOSE_CITY, payload: id }
}

