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

const getHourClass = (hour) => {
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

const kelvinToFahrenheit = (kelvin) => {
  const celsius = kelvin - 273.14
  return celsius * 9/5 + 32
}

const getForecasts = (rawList) => rawList.map(getWeatherInfo)
const getWeatherInfo = (weatherObj) => {
  const fahrenheit = kelvinToFahrenheit(weatherObj.temp)
  const timeStamp = weatherObj.dt * 1000
  const dateObj = new Date(timeStamp)
  const month = dateObj.getMonth() + 1
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

const getLocalHourOffset = (weatherObj, timezoneOffset) => {
  const timeStamp = weatherObj.dt * 1000
  const dateObj = new Date(timeStamp)
  const localOffset = dateObj.getTimezoneOffset() / 60
  const cityOffset = -1 * timezoneOffset / (60 * 60)
  // console.log(`local: ${localOffset}, city: ${cityOffset}`)
  // console.log(`hour offset: ${localOffset - cityOffset}`)
  return {
    hourOffset: localOffset - cityOffset
  }
}


export {
  getDisplayHour,
  getHourClass,
  getIcon,
  getForecasts,
  getLocalHourOffset
}
