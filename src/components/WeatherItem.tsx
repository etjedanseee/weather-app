import { FC } from "react"
import { convertTemp } from "../helpers/convertTemp"
import { IWeatherState } from "../redux/types"


const WeatherItem: FC<IWeatherState> = ({ weather, loading, error }) => {
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const weatherIconSrc = weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` : undefined

  return (
    <div>
      <h1>Weather in {weather?.name}</h1>
      <div>{convertTemp(weather?.main.temp || 0)} °C</div>
      <div>
        <img src={weatherIconSrc} alt="weather icon" />
      </div>
      <div>{weather && weather.weather[0].description}</div>
    </div>
  )
}

export default WeatherItem