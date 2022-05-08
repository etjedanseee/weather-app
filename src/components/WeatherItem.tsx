import { FC, MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { convertTemp } from "../helpers/convertTemp"
import { useActions } from "../hooks/useActions"
import { IWeatherState } from "../redux/types"
import s from '../styles/weatherItem.module.scss'


const WeatherItem: FC<IWeatherState> = ({ weathers, loading, error }) => {
  const { closeCity } = useActions()
  const navigate = useNavigate()
  const closeIcon = require("../assets/icons/close.png")

  const onItemClick = (city: string) => {
    navigate('/' + city, { replace: true })
  }

  const onClose = (e: MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation()
    closeCity(id)
  }

  if (loading) {
    return <h1 className={s.loading}>Loading...</h1>
  }
  if (error) {
    return <h1 className={s.loading}>{error}</h1>
  }
  if (!weathers.length) {
    return <h1 className={s.loading}>No choise cities</h1>
  }

  return (
    <>
      <div className={s.cnt} >
        {weathers?.length && weathers.map(w => (
          <div key={w.id} className={s.item} onClick={() => onItemClick(w.name)}>
            <div className={s.city}>{w.name}</div>
            <div className={s.temperature}>
              <div className={s.tempnum}>{convertTemp(w.main.temp || 0)}</div>
              <span> °C</span>
            </div>
            <div className={s.image}>
              <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon.slice(0, 2) + 'd'}@2x.png`} alt="weather icon" />
            </div>
            <div className={s.description}>{w.weather[0].description}</div>
            <img
              src={closeIcon}
              className={s.close}
              onClick={(e) => onClose(e, w.id)}
              alt="close" />
          </div>
        ))}
      </div>
    </>
  )
}

export default WeatherItem