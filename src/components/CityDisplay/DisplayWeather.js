import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import { getDisplayHour, getHourClass, getIcon } from '../../shared/utility'

const DisplayWeather = (props) => {
  const { weatherInfo } = props

  const adjustedIcon = getIcon(weatherInfo.hour, weatherInfo.icon)
  const iconSrc = `http://openweathermap.org/img/wn/${adjustedIcon}@2x.png`
  const hourClass = getHourClass(weatherInfo.hour)

  return (
    <div className="weather-info-tile">
      <h3>
        {weatherInfo.date}
      </h3>
      <h2>
        {getDisplayHour(weatherInfo.hour)}
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

export default DisplayWeather
