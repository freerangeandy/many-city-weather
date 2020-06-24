import React from 'react'

import DisplayCity from '../components/DisplayCity'

const DisplayContainer = (props) => {
  const { cityList } = props

  let displayList
  displayList = cityList.map(({ name, coords }, index) => {
    return <DisplayCity key={index} name={name} coords={coords} />
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
