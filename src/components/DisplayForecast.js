import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const DisplayForecast = (props) => {
  const { forecast } = props

  const getDisplayHour = (hour) => {
    if (hour === 0) {
      return "12am"
    } else if (hour > 12 ){
      const newHour = hour - 12
      return `${newHour}pm`
    } else {
      return `${hour}am`
    }
  }

  const isNight = (hour) => (hour >= 21 || hour < 6)

  const getClass = (hour) => {
    return isNight(hour) ? "night-bg" : "day-bg"
  }

  const getIcon = (hour, icon) => {
    let newIcon
    if (isNight(hour)) {
      newIcon = icon.replace('d', 'n')
    } else {
      newIcon = icon.replace('n', 'd')
    }
    return newIcon
  }

  const adjustedIcon = getIcon(forecast.hour, forecast.icon)
  const iconSrc = `http://openweathermap.org/img/wn/${adjustedIcon}@2x.png`
  const hourClass = getClass(forecast.hour)

  return (
    <div className="forecast-tile">
      <h3>
        {forecast.date}
      </h3>
      <h2>
        {getDisplayHour(forecast.hour)}
      </h2>
      <div className={`weather-card ${hourClass}`}>
        <h2>
          {forecast.temp.toFixed(0)} °F
        </h2>
        <Avatar className="weather-icon" src={iconSrc}/>
        <h3>
          {forecast.description}
        </h3>
      </div>
    </div>
  )

}

export default DisplayForecast
