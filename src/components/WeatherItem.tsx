import { FC } from "react"
import { convertTemp } from "../helpers/convertTemp"
import { IWeatherState } from "../redux/types"


const WeatherItem: FC<IWeatherState> = ({ weathers, loading, error }) => {
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      {weathers?.length && weathers.map(w => (
        <div key={w.id}>
          <h1>Weather in {w.name}</h1>
          <div>{convertTemp(w.main.temp || 0)} °C</div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="weather icon" />
          </div>
          <div>{w.weather[0].description}</div>
        </div>
      ))}
    </>
  )
}

export default WeatherItem