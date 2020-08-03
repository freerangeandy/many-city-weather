import React from 'react'
import  { CSSTransitionGroup } from 'react-transition-group'

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
        <CSSTransitionGroup
          transitionName="city-weather"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}

          >
        {displayList}
        </CSSTransitionGroup>
      </ul>
    </div>
  )
}

export default CityDisplayPane
