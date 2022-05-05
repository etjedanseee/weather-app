import { IWeatherState, WeatherAction, WeatherActionTypes } from './../types';

const initialState: IWeatherState = {
  weather: null,
  loading: false,
  error: null
}

export const weatherReducer = (state = initialState, action: WeatherAction): IWeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER: {
      return { ...state, loading: true }
    }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS: {
      return { ...state, loading: false, weather: action.payload }
    }
    case WeatherActionTypes.FETCH_WEATHER_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    default: return state
  }
}