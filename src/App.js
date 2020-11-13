import React from 'react';
import ContadorFunc from './components/ContadorFunc.js';
import IncFunc from './components/IncFunc.js';
import DecFunc from './components/DecFunc.js';

const styles = {
  container: {
    width: '500px',
    margin: '0 auto'
  }
};

const App = () => {
  return (
    <div style={styles.container}>
      <ContadorFunc></ContadorFunc>
      <IncFunc></IncFunc>
      <DecFunc></DecFunc>
    </div>
  );
};

export default App;
