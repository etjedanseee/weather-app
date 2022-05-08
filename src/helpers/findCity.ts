import { IWeather } from './../types';

export const findCity = (cities: IWeather[], city: string) => {
  return cities.find(c => c.name === city) || null
}