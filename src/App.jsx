import React, {useState, useEffect, useContext} from "react";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext }  from './context';

function App() {
  const theme = useContext(ThemeContext);
  const {darkMode} = theme.state;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#000' : 'white',
        color: darkMode && 'white'
      }}
    >
      <Toggle />
      <Intro />
    </div>
  );
}

export default App;