import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'

const MAPBOX_KEY = "pk.eyJ1IjoiZnJlZXJhbmdlYW5keSIsImEiOiJja2J0bXoxMnAwYmpnMnlxdmYyOTVqNXA0In0.1u16EPjQEgr4LwHinZZKjA"

const CitySearchField = (props) => {
  const { suggestionSelect, searchFieldRef } = props

  return (
    <MapboxAutocomplete
      publicKey={MAPBOX_KEY}
      onSuggestionSelect={suggestionSelect}
      inputClass="city-input"
      ref={searchFieldRef}
    />
  )
}

export default CitySearchField
