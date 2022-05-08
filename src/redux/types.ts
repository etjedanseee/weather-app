import { IWeather } from "../types"

export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
  CLOSE_CITY = 'CLOSE_CITY',
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
interface closeCityAction {
  type: WeatherActionTypes.CLOSE_CITY,
  payload: number
}

export interface IWeatherState {
  weathers: IWeather[],
  loading: boolean,
  error: null | string
}

export type WeatherAction = fetchWeatherAction | fetchWeatherErrorAction | fetchWeatherSuccessAction | closeCityAction 
