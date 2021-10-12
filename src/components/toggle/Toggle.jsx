import React, {useContext} from 'react';
import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import {ThemeContext} from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
  }
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle__icon" />
      <img src={Moon} alt="" className="toggle__icon" />
      <div 
        className="toggle__button"
        onClick={handleClick}
        style={{left: theme.state.darkMode ? 0 : 25}}
        ></div>
    </div>
  )
}

export default Toggle;
