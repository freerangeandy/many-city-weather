import React, {useState} from 'react';

import CitySearchPane from '../components/CitySearch/CitySearchPane'
import CityDisplayPane from '../components/CityDisplay/CityDisplayPane'
import { kelvinToFahrenheit } from '../shared/utility'

const OPEN_WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/'
const EXCLUSIONS = `&exclude=current,minutely,daily`
const WEATHER_API_KEY = '85605c622914f5dad8bccbb102c2769c'

const ManyCityWeather = props => {
  const [selectedCity, setSelectedCity] = useState(null)
  const [cityList, setCityList] = useState([])

  const addCityDisplay = () => {
    if (selectedCity !== null) {
      fetchForecast(selectedCity)
      setSelectedCity(null)
    }
  }

  const suggestionSelect = (result, lat, lng, text) => {
    const coords = [lat, lng]
    const cityObj = { name: result, coords: coords, forecasts: null }
    setSelectedCity(cityObj)
  }

  const fetchForecast = (city) => {
    const coordParams = `lat=${city.coords[0]}&lon=${city.coords[1]}`
    fetch(`${OPEN_WEATHER_PATH}onecall?${coordParams}${EXCLUSIONS}&appid=${WEATHER_API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      const forecasts = getForecasts(responseJson.hourly)
      const newCityList = [...cityList, { ...city, forecasts }]
      setCityList(newCityList)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const getForecasts = (rawList) => rawList.map(getWeatherInfo)
  const getWeatherInfo = (weatherObj) => {
    const fahrenheit = kelvinToFahrenheit(weatherObj.temp)
    const timeStamp = weatherObj.dt * 1000
    const dateObj = new Date(timeStamp)
    const month = dateObj.getMonth()
    const day = dateObj.getDate()
    const date = `${month}/${day}`
    const hour = dateObj.getHours()
    return {
      date,
      hour,
      temp: fahrenheit,
      main: weatherObj.weather[0].main,
      description: weatherObj.weather[0].description,
      icon: weatherObj.weather[0].icon,
      cloudCover: weatherObj.clouds,
      windSpeed: weatherObj.wind_speed
    }
  }

  return (
    <div className="App">
      <h1 className="page-title">How's the weather over there?</h1>
      <CitySearchPane
        suggestionSelect={suggestionSelect}
        clickHandler={addCityDisplay}
      />
      <CityDisplayPane cityList={cityList} />
    </div>
  )
}

export default ManyCityWeather;
