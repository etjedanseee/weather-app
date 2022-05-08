export interface IWeather {
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }],
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  }
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    feels_like: number,
    humidity: number,
  }
  id: number,
  name: string,
}
