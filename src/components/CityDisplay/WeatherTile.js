import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import { getDisplayHour, getHourClass, getIcon } from '../../shared/utility'

const WeatherTile = (props) => {
  const { weatherInfo, showLocal } = props

  const adjustedDate = showLocal ? weatherInfo.localDate : weatherInfo.date
  const adjustedHour = showLocal ? weatherInfo.localHour : weatherInfo.hour
  const adjustedIcon = getIcon(adjustedHour, weatherInfo.icon)
  const iconSrc = `http://openweathermap.org/img/wn/${adjustedIcon}@2x.png`
  const hourClass = getHourClass(adjustedHour)

  console.log(weatherInfo.localDate)
  console.log(weatherInfo.localHour)
  return (
    <div className="weather-info-tile">
      <h3>
        {adjustedDate}
      </h3>
      <h2>
        {getDisplayHour(adjustedHour)}
      </h2>
      <div className={`weather-card ${hourClass}`}>
        <h2>
          {weatherInfo.temp.toFixed(0)} °F
        </h2>
        <Avatar className="weather-icon" src={iconSrc}/>
        <h3>
          {weatherInfo.description}
        </h3>
      </div>
    </div>
  )

}

export default WeatherTile
