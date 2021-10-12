import React, {useContext} from 'react';
import './intro.css';
import Me from '../../img/me.png';


const Intro = () => {
  
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__left__wrapper">
          <h2 className="intro__greeting">Hello, My name is</h2>
          <h1 className="intro__name">Ishaya Sunday</h1>
          
          <div className="intro-title">
            <div className="intro-title__wrapper">
              <div className="intro-title__item">Web Developer</div>
              <div className="intro-title__item">UI/UX Developer</div>
              <div className="intro-title__item">Mobile Developer</div>
              <div className="intro-title__item">Dev OPS</div>
              <div className="intro-title__item">Content Creator</div>
            </div>
          </div>

          <p className="intro-desc">
            Lorem ipsum dolor sit amet, consectetur adip 
            lorem ipsum dolor sit amet, consect, lorem ipsum dolor
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Atque illum ipsam accusamus.
          </p>
        </div>
      </div>

      <div className="intro__right">
        <div className="intro__bg"></div>
        <img src={Me} alt="" className="intro__img" />
      </div>
    </div>
  )
}

export default Intro
