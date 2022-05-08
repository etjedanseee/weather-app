import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { findCity } from '../helpers/findCity'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IWeather } from '../types'
import s from '../styles/weatherInfo.module.scss'
import { convertTemp } from '../helpers/convertTemp'
import { toUpperFirsLet } from '../helpers/toUpperFirsLet'

const WeatherInfo: FC = () => {
  const weathers = useTypedSelector(state => state.weather.weathers)
  const [info, setInfo] = useState<IWeather | null>(null)
  const { city } = useParams()
  const navigate = useNavigate()

  const arrow = require('../assets/icons/arrow.png')

  useEffect(() => {
    const currentCity = findCity(weathers, city || '')

    if (currentCity) {
      setInfo(currentCity)
    }
  }, [])

  const onGoback = () => {
    navigate('/', { replace: true })
  }

  if (!info) {
    return <h1>No found current city</h1>
  }

  return (
    <>
      <div className={s.cnt}>
        <div className={s.name}>{info.name}</div>
        <img className={s.goback} onClick={onGoback} src={arrow} alt="go back" />
        <div className={s.temp}>{convertTemp(info.main.temp || 0)}<span>°C</span></div>
        <div className={s.description}>{toUpperFirsLet(info.weather[0].description)}</div>

        <div className={s.cart}>
          <div className={s.feels + ' ' + s.item}>
            <div className={s.title}>Feels like</div>
            <span>{convertTemp(info.main.feels_like || 0)}°C</span>
          </div>
          <div className={s.humidity + ' ' + s.item}>
            <div className={s.title}>Humidity</div>
            <span>{info.main.humidity}%</span>
          </div>
          <div className={s.clouds + ' ' + s.item}>
            <div className={s.title}>Clouds</div>
            <span>{info.clouds.all}%</span>
          </div>

          <div className={s.preassure + ' ' + s.item}>
            <div className={s.title}>Preassure</div>
            <span>{info.main.pressure}mmHg</span>
          </div>
          <div className={s.wind + ' ' + s.item}>
            <div className={s.title}>Wind</div>
            <span>{info.wind.speed} km/h</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherInfo