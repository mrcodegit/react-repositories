import React from 'react';
import styled from 'styled-components';
import Dashboard from '../Modules/Dashboard/Dashboard';
import './App.scss';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

function App() {
  return (
    <AppContainer className="App">
      <Dashboard></Dashboard>
    </AppContainer>
  );
}

export default App;
