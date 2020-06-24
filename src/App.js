import React, {useState} from 'react';
import Container from '@material-ui/core/Container';

import InputContainer from './containers/InputContainer'
import DisplayContainer from './containers/DisplayContainer'
import './styles/index.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [cityList, setCityList] = useState([])

  const addCityDisplay = () => {
    if (selectedCity !== null) {
      const newCityList = [...cityList, selectedCity]
      setCityList(newCityList)
      setSelectedCity(null)
    }
  }

  return (
    <div className="App">
      <h1 className="page-title">How's the weather over there?</h1>
      <InputContainer
        setSelectedCity={setSelectedCity}
        clickHandler={addCityDisplay}
      />
      <DisplayContainer
        cityList={cityList}
      />
    </div>
  );
}

export default App;
