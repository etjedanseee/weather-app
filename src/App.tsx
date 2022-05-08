import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import WeatherItem from "./components/WeatherItem";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import './styles/index.scss'

function App() {
  const { weathers, loading, error } = useTypedSelector(state => state.weather)
  const { fetchWeather } = useActions()

  useEffect(() => {
    fetchWeather('Miami')
  }, [])

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={
          <>
            <Search />
            <WeatherItem
              weathers={weathers}
              loading={loading}
              error={error}
            />
          </>
        } />

        <Route path="/:city" element={<WeatherInfo />} />
      </Routes>
    </div>
  );
}

export default App;
