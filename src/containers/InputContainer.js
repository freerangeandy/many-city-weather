import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const InputContainer = (props) => {
  const { setSelectedCoords, setSelectedCity } = props

  const suggestionSelect = (result, lat, lng, text) => {
    const coords = [lat, lng]
    setSelectedCoords(coords)
    setSelectedCity(result)
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
      > Add Location </Button>
    </div>
  )
}

export default InputContainer
