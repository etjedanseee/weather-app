export interface IWeather {
  weather: [{
    id: number,
    main: string,
    description: string,
    icon: string
  }],
  wind: {
    speed: number
  },
  main: {
    temp: number
  }
  id: number,
  name: string,
}
