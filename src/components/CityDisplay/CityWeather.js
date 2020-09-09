import React from 'react'
import Grid from '@material-ui/core/Grid'

import WeatherTile from './WeatherTile'
import CityHeader from './CityHeader'

const CityWeather = (props) => {
  const { name, forecasts, hourOffset, showLocal, deleteHandler, showOffsetHandler } = props

  let cityTiles = forecasts
    .slice(0,6)
    .map((weatherInfo, index) => {
      return (
        <Grid item xs={2} key={index}>
          <WeatherTile
            weatherInfo={weatherInfo}
            hourOffset={hourOffset}
            showLocal={showLocal} />
        </Grid>
      )
    })

  return (
    <li className="city-weather">
      <CityHeader name={name} deleteHandler={deleteHandler} showOffsetHandler={showOffsetHandler} />
      <Grid container spacing={1}>
        {cityTiles}
      </Grid>
    </li>
  )
}

export default CityWeather
