import { IWeatherState, WeatherAction, WeatherActionTypes } from './../types';

const initialState: IWeatherState = {
  weathers: [],
  loading: false,
  error: null
}

export const weatherReducer = (state = initialState, action: WeatherAction): IWeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER: {
      return { ...state, loading: true, error: null }
    }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS: {
      if (state.weathers.find(w => w.id === action.payload.id)) {
        return { ...state, loading: false }
      }
      return {
        ...state, loading: false,
        weathers: [
          ...state.weathers,
          action.payload
        ]
      }
    }
    case WeatherActionTypes.FETCH_WEATHER_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    case WeatherActionTypes.CLOSE_CITY: {
      return { ...state, weathers: state.weathers.filter(w => w.id !== action.payload) }
    }
    default: return state
  }
}