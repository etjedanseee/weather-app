import { useEffect } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { weathers, loading, error } = useTypedSelector(state => state.weather)
  const { fetchWeather } = useActions()

  // console.log('weather', weather);

  useEffect(() => {
    fetchWeather('London')
  }, [])

  return (
    <>
      <Search />
      <WeatherItem
        weathers={weathers}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default App;
