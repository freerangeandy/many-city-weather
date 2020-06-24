import React, {useState} from 'react';
import Container from '@material-ui/core/Container';

import InputContainer from './containers/InputContainer'
import DisplayContainer from './containers/DisplayContainer'
import './styles/index.css';

function App() {
  const [selectedCoords, setSelectedCoords] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="App">
      <InputContainer
        setSelectedCoords={setSelectedCoords}
        setSelectedCity={setSelectedCity}
      />
      <DisplayContainer
        selectedCoords={selectedCoords}
        selectedCity={selectedCity}
      />
    </div>
  );
}

export default App;
