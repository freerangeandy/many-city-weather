import React from 'react'

import CityAddButton from './CityAddButton'
import CitySearchField from './CitySearchField'

const CitySearchPane = (props) => {
  const { suggestionSelect, addCityDisplay } = props

  return (
    <div className="add-city">
      <CitySearchField suggestionSelect={suggestionSelect} />
      <CityAddButton clickHandler={addCityDisplay} />
    </div>
  )
}

export default CitySearchPane
