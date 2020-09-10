import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import { getDisplayHour, getCardClass, getIcon } from '../../shared/utility'

const WeatherTile = (props) => {
  const { weatherInfo, showLocal } = props

  const adjustedDate = showLocal ? weatherInfo.localDate : weatherInfo.date
  const adjustedHour = showLocal ? weatherInfo.localHour : weatherInfo.hour
  const adjustedIcon = getIcon(adjustedHour, weatherInfo.icon)
  const iconSrc = `http://openweathermap.org/img/wn/${adjustedIcon}@2x.png`
  const cardClass = getCardClass(adjustedHour)

  return (
    <div className="weather-info-tile">
      <div>
        <h3>
          {adjustedDate}
        </h3>
        <h2>
          {getDisplayHour(adjustedHour)}
        </h2>
      </div>
      <div className={`weather-card ${cardClass}`}>
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
