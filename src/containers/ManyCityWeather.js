import React, { useState, useRef } from 'react';

import CitySearchPane from '../components/CitySearch/CitySearchPane'
import CityDisplayPane from '../components/CityDisplay/CityDisplayPane'
import { getForecasts, getLocalHourOffset } from '../shared/utility'

const OPEN_WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/'
const EXCLUSIONS = `&exclude=current,minutely,daily`
const WEATHER_API_KEY = '85605c622914f5dad8bccbb102c2769c'

const ManyCityWeather = (props) => {
  const [selectedCity, setSelectedCity] = useState(null)
  const [cityList, setCityList] = useState([])
  const searchFieldRef = useRef(null)

  const addCityDisplay = () => {
    if (selectedCity !== null) {
      fetchForecast(selectedCity)
      setSelectedCity(null)
      searchFieldRef.current.state.query = ""
    }
  }

  const suggestionSelect = (result, lat, lng, text) => {
    const coords = [lat, lng]
    const cityObj = { name: result, coords: coords, forecasts: null }
    setSelectedCity(cityObj)
  }

  const fetchForecast = (city) => {
    const coordParams = `lat=${city.coords[0]}&lon=${city.coords[1]}`
    fetch(`${OPEN_WEATHER_PATH}onecall?${coordParams}${EXCLUSIONS}&appid=${WEATHER_API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      const forecasts = getForecasts(responseJson.hourly)
      const hourOffset = getLocalHourOffset(responseJson.hourly[0], responseJson.timezone_offset)
      const newCity = { ...city, ...hourOffset, showLocal: false, forecasts }
      const newCityList = [...cityList, newCity]
      setCityList(newCityList)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const cityDeleteHandler = (cityIndex) => () => {
    const newCityList = [...cityList.slice(0, cityIndex), ...cityList.slice(cityIndex + 1)]
    setCityList(newCityList)
  }

  const cityShowOffsetHandler = (cityIndex) => () => {
    const citySelected = cityList[cityIndex]
    const updatedShowLocal = !citySelected.showLocal
    const updatedCity = { ...citySelected, showLocal: updatedShowLocal }
    const newCityList = [
      ...cityList.slice(0, cityIndex),
      updatedCity,
      ...cityList.slice(cityIndex + 1)]
    setCityList(newCityList)
  }

  return (
    <>
      <h1 className="page-title">How's the weather over there?</h1>
      <CitySearchPane
        suggestionSelect={suggestionSelect}
        addCityDisplay={addCityDisplay}
        searchFieldRef={searchFieldRef}
      />
      <CityDisplayPane cityList={cityList} deleteHandler={cityDeleteHandler}/>
    </>
  )
}

export default ManyCityWeather;
