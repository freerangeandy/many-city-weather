import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const InputContainer = (props) => {
  const { setSelectedCity, clickHandler } = props

  const suggestionSelect = (result, lat, lng, text) => {
    const coords = [lat, lng]
    const cityObj = { name: result, coords: coords }
    setSelectedCity(cityObj)
  }

  return (
    <div className="add-city">
      <MapboxAutocomplete
        publicKey="pk.eyJ1IjoiZnJlZXJhbmdlYW5keSIsImEiOiJja2J0bXoxMnAwYmpnMnlxdmYyOTVqNXA0In0.1u16EPjQEgr4LwHinZZKjA"
        onSuggestionSelect={suggestionSelect}
        inputClass="city-input"
      />
      <Button
        variant="contained"
        color="primary"
        className="add-button"
        startIcon={<Icon>add_circle</Icon>}
        onClick={clickHandler}
      > Add Location </Button>
    </div>
  )
}

export default InputContainer
