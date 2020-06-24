import React from 'react'

const DisplayContainer = (props) => {
  const { selectedCoords, selectedCity } = props
  return (
    <div>
      <h1>{selectedCity}</h1>
      <h2>{selectedCoords}</h2>
    </div>
  )
}

export default DisplayContainer
