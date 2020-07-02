import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import DisplayWeather from './DisplayWeather'

const OPEN_WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/'
const WEATHER_API_KEY = '85605c622914f5dad8bccbb102c2769c'

const DisplayCity = (props) => {
  const { name, coords } = props
  const [cityName, setCityName] = useState(null)
  const [cityForecast, setCityForecast] = useState(null)
  const [cityWeather, setCityWeather] = useState(null)

  useEffect(() => {
    fetchWeather(coords)
    fetchForecast(coords)
  }, [])

  const fetchWeather = (coords) => {
    fetch(`${OPEN_WEATHER_PATH}weather?lat=${coords[0]}&lon=${coords[1]}&appid=${WEATHER_API_KEY}`)
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
      const currentWeather = getWeatherInfo(responseJson)
      setCityName(responseJson.name)
      setCityWeather(currentWeather)
      console.log(responseJson)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const fetchForecast = (coords) => {
    fetch(`${OPEN_WEATHER_PATH}forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${WEATHER_API_KEY}`)
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
      const forecasts = getForecasts(responseJson.list)
      setCityForecast(forecasts)
      console.log(responseJson)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const getForecasts = (rawList) => rawList.map(getWeatherInfo)

  const getWeatherInfo = (weatherObj) => {
    const isCurrent = !weatherObj.dt_txt
    const celsius = weatherObj.main.temp - 273.14
    const fahrenheit = celsius * 9/5 + 32
    const timeStamp = !isCurrent ? weatherObj.dt_txt : weatherObj.dt * 1000
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
      windSpeed: weatherObj.wind.speed
    }
  }

  let cityTiles
  if (cityName && cityWeather && cityForecast) {
    cityTiles = [cityWeather, ...cityForecast]
    .slice(0,6)
    .map((weatherInfo, index) => {
      return (
        <Grid item xs={2} key={index}>
          <DisplayWeather weatherInfo={weatherInfo} />
        </Grid>
      )
    })
  }

  return (
    <li className="display-city">
      <h1 className="city-name">{cityName}</h1>
      <Grid container spacing={1}>
      {cityTiles}
      </Grid>
    </li>
  )
}

export default DisplayCity
