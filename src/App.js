import React from 'react';
import Contador from "./containers/ContadorContainer";
import Incrementador from './containers/IncrementadorContainer';
import Decrementador from './containers/DecrementadorContainer';
import globalStore from './stores/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={globalStore}>
    <div className="App">
      
      <Contador></Contador>
      <div>
      <Incrementador></Incrementador>
      <Decrementador></Decrementador>
    </div>
    </div>
    </Provider>
  );
}

export default App;
