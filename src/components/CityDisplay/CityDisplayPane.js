import React from 'react'

import CityWeather from './CityWeather'

const CityDisplayPane = (props) => {
  const { cityList, deleteHandler } = props

  let displayList = cityList.map(({ name, forecasts }, index) => {
    return (
      <CityWeather
        key={index}
        name={name}
        forecasts={forecasts}
        deleteHandler={deleteHandler(index)}
      />)
  })

  return (
    <div className="city-display">
      <ul>
        {displayList}
      </ul>
    </div>
  )
}

export default CityDisplayPane
