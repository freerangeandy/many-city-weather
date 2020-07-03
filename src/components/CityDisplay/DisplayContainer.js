import React from 'react'

import DisplayCity from './DisplayCity'

const DisplayContainer = (props) => {
  const { cityList } = props

  let displayList = cityList.map(({ name, coords, forecasts }, index) => {
    return (
      <DisplayCity
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

export default DisplayContainer
