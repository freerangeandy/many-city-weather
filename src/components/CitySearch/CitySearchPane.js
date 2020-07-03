import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const CitySearchPane = (props) => {
  const { suggestionSelect, clickHandler } = props

  return (
    <div className="add-city">
      <MapboxAutocomplete
        publicKey="pk.eyJ1IjoiZnJlZXJhbmdlYW5keSIsImEiOiJja2J0bXoxMnAwYmpnMnlxdmYyOTVqNXA0In0.1u16EPjQEgr4LwHinZZKjA"
        onSuggestionSelect={suggestionSelect}
        inputClass="city-input"
      />
      <div className="add-button">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Icon>add_circle</Icon>}
          onClick={clickHandler}
        > Add&nbsp;Location </Button>
      </div>
    </div>
  )
}

export default CitySearchPane
