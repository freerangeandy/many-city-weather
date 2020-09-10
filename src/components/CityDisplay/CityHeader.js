import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const CityHeader = props => {
  const timeClass = props.showLocal ? "local-time" : ""

  return (
    <div className="city-header">
      <div onClick={props.showOffsetHandler}>
        <FontAwesomeIcon className={`icon-button ${timeClass}`} icon={ faClock } />
      </div>
      <div className="city-name"><h1>{props.name}</h1></div>
      <div onClick={props.deleteHandler}>
        <FontAwesomeIcon className="icon-button" icon={ faTimes } />
      </div>
    </div>
  )
}

export default CityHeader
