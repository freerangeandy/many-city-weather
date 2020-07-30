import React from 'react'

import CityAddButton from './CityAddButton'
import CitySearchField from './CitySearchField'

const CitySearchPane = (props) => {
  const { suggestionSelect, addCityDisplay, searchFieldRef } = props

  return (
    <div className="add-city">
      <CitySearchField
        suggestionSelect={suggestionSelect}
        searchFieldRef={searchFieldRef}
        />
      <CityAddButton clickHandler={addCityDisplay} />
    </div>
  )
}

export default CitySearchPane
