import { useEffect } from "react";
import WeatherItem from "./components/WeatherItem";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { weather, loading, error } = useTypedSelector(state => state.weather)
  const { fetchWeather } = useActions()

  // console.log('weather', weather);

  useEffect(() => {
    fetchWeather('Moscow')
  }, [])

  return (
    <>
      <WeatherItem weather={weather} loading={loading} error={error} />
    </>
  );
}

export default App;
