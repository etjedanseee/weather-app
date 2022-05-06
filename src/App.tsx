import { useEffect } from "react";
import Search from "./components/Search";
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
      <Search />
      <WeatherItem
        weather={weather}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default App;
