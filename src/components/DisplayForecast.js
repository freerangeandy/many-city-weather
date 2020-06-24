import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

  const iconSrc = "http://openweathermap.org/img/wn/10d@2x.png"
  return (
    <Card className="forecast-tile">
      <h3>
        {forecast.date}
      </h3>
      <h2>
        {getDisplayHour(forecast.hour)}
      </h2>
      <h2>
        {forecast.temp.toFixed(0)} °F
      </h2>
      <Avatar className="weather-icon" src={iconSrc}/>
    </Card>
  )

}

export default DisplayForecast
