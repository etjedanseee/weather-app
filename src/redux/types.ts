import { IWeather } from "../types"

export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'
}


interface fetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER,
}

interface fetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: IWeather
}

interface fetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: string
}

export type WeatherAction = fetchWeatherAction | fetchWeatherErrorAction | fetchWeatherSuccessAction


export interface IWeatherState {
  weather: IWeather | null,
  loading: boolean,
  error: null | string
}