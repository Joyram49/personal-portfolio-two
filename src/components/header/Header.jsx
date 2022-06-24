import React from "react";
import "./header.css";
import CV from "../../assets/cv.pdf";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id='header'>
      <div className='container container__header'>
        <h5>Hello, I'm</h5>
        <h1>Haija Bintu</h1>
        <small className='text-light'>Fullstack Developer</small>
        <div className='cta__header'>
          <a href={CV} download className='btn'>
            Download CV
          </a>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
        <div className='img__header'>
          <img src={ME} alt='person' />
        </div>
        <HeaderSocials />
        <div className='contact__header'>Scroll Down</div>
      </div>
    </header>
  );
};

export default Header;
