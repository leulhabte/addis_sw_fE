import React from 'react';
import Navbar from "./components/Navbar/index";
import GlobalStyle from './styles/globalStyles';
import Grid from "./components/Grid"

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Grid/>
    </div>
  );
}

export default App;