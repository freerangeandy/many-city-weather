import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const OPEN_WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/forecast'
const WEATHER_API_KEY = '85605c622914f5dad8bccbb102c2769c'

const DisplayCity = (props) => {
  const { name, coords } = props
  const [cityInfo, setCityInfo] = useState(null)
  const [cityWeather, setCityWeather] = useState(null)

  useEffect(() => {
    fetchWeather(coords)
  }, [])

  const fetchWeather = (coords) => {
    fetch(`${OPEN_WEATHER_PATH}?lat=${coords[0]}&lon=${coords[1]}&appid=${WEATHER_API_KEY}`)
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
      setCityInfo(responseJson.city)
      const forecasts = getForecasts(responseJson.list)
      setCityWeather(forecasts)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const getForecasts = (rawList) => {
    return rawList.map(forecast => {
      const celsius = forecast.main.temp - 273.14
      const fahrenheit = celsius * 9/5 + 32
      return {
        timeStamp: forecast.dt_txt,
        temp: fahrenheit,
        main: forecast.weather.main,
        description: forecast.weather.description,
        icon: forecast.weather.icon,
        cloudCover: forecast.clouds,
        windSpeed: forecast.wind.speed
      }
    })
  }

  let cityName
  let cityForecasts
  if (cityInfo) {
    cityName = cityInfo.name
  }
  if (cityWeather) {
    cityForecasts = cityWeather
    .slice(0,6)
    .map((forecast, index) => {
      return (
        <Grid item xs={2} key={index}>
          <h4>{forecast.temp.toFixed(0)}</h4>
        </Grid>
      )
    })
  }

  return (
    <li className="display-city">
      <Paper elevation={2}>
        <h1>{cityName}</h1>
        <Grid container spacing={0}>
        {cityForecasts}
        </Grid>
      </Paper>
    </li>
  )
}

export default DisplayCity
