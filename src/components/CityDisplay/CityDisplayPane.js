import React from 'react'

import CityWeather from './CityWeather'

const CityDisplayPane = (props) => {
  const { cityList } = props

  let displayList = cityList.map(({ name, coords, forecasts }, index) => {
    return (
      <CityWeather
        key={index}
        name={name}
        coords={coords}
        forecasts={forecasts}
      />)
  })

  return (
    <div>
      <ul>
        {displayList}
      </ul>
    </div>
  )
}

export default CityDisplayPane
