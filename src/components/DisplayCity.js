import React from 'react'
import Grid from '@material-ui/core/Grid'

import DisplayWeather from './DisplayWeather'

const DisplayCity = (props) => {
  const { name, forecasts } = props

  let cityTiles = forecasts
    .slice(0,6)
    .map((weatherInfo, index) => {
      return (
        <Grid item xs={2} key={index}>
          <DisplayWeather weatherInfo={weatherInfo} />
        </Grid>
      )
    })

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
