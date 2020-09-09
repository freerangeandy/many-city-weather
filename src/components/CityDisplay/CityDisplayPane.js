import React from 'react'
import  { TransitionGroup, CSSTransition } from 'react-transition-group'

import CityWeather from './CityWeather'

const CityDisplayPane = (props) => {
  const { cityList, deleteHandler, showOffsetHandler } = props

  let displayList = cityList.map(({ name, hourOffset, showLocal, forecasts }, index) => {
    return (
      <CSSTransition
        key={index}
        classNames="city-weather"
        timeout={{ enter: 250, exit: 250}}
      >
        <CityWeather
          name={name}
          forecasts={forecasts}
          hourOffset={hourOffset}
          showLocal={showLocal}
          deleteHandler={deleteHandler(index)}
          showOffsetHandler={showOffsetHandler(index)}
        />
      </CSSTransition>
    )
  })

  return (
    <div className="city-display">
      <ul>
        <TransitionGroup>
          {displayList}
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default CityDisplayPane
