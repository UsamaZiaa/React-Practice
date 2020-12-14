import { useState } from 'react'
import WeatherFetch from './components/WeatherFetch'

function App() {
  const [city, setCityName] = useState('')
  const [showWeather, setShowWeather] = useState(false)
  
  const handleCity = (event) => {
    setCityName(event.target.value)
  } 
  
  const setQuery = () => {
      setShowWeather(city)
      setCityName('')
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input value={city} type="text" placeholder="Enter City Name" onChange={handleCity}/>
      <button onClick={setQuery}>Search</button>
      {/* {showWeather? <WeatherFetch searchCity ={city}/> : null} */}
      {showWeather? <WeatherFetch searchCity ={showWeather}/> : null}
    </div>
  );
}

export default App;