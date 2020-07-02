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

export {
  getDisplayHour,
  getHourClass,
  getIcon,
  kelvinToFahrenheit
}
