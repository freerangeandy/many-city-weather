import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CityHeader = props => {

  return (
    <div className="city-header">
      <div className="city-name"><h1>{props.name}</h1></div>
      <div onClick={props.deleteHandler}>
        <FontAwesomeIcon className="delete-button" icon={ faTimes } />
      </div>
    </div>
  )
}

export default CityHeader
