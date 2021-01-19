import React from 'react';
import './App.css';
import Routes from './Routes';
import MyProvider from './MyProvider';

function App() {
  return (
      <MyProvider>
        <Routes />
      </MyProvider>
  );
}

export default App;
