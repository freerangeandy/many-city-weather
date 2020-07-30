import React from 'react'

const CityHeader = props => {

  return (
    <div className="city-header">
      <div className="city-name"><h1>{props.name}</h1></div>
      <div>X</div>
    </div>
  )
}

export default CityHeader
