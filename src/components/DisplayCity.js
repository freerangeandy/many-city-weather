import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import DisplayWeather from './DisplayWeather'

const OPEN_WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/'
const EXCLUSIONS = `&exclude=current,minutely,daily`
const WEATHER_API_KEY = '85605c622914f5dad8bccbb102c2769c'

const DisplayCity = (props) => {
  const { name, coords } = props
  const [cityForecast, setCityForecast] = useState(null)

  useEffect(() => {
    fetchForecast(coords)
  }, [])

  const fetchForecast = (coords) => {
    const coordParams = `lat=${coords[0]}&lon=${coords[1]}`
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
      console.log(responseJson)
      const forecasts = getForecasts(responseJson.hourly)
      setCityForecast(forecasts)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const getForecasts = (rawList) => rawList.map(getWeatherInfo)

  const getWeatherInfo = (weatherObj) => {
    const celsius = weatherObj.temp - 273.14
    const fahrenheit = celsius * 9/5 + 32
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

  let cityTiles
  if (cityForecast) {
    cityTiles = cityForecast
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
      <h1 className="city-name">{name}</h1>
      <Grid container spacing={1}>
        {cityTiles}
      </Grid>
    </li>
  )
}

export default DisplayCity
