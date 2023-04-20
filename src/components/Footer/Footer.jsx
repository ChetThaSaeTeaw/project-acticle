import React from 'react';

// CSS
import "./Footer.scss";

// Images
import brandLogo from '../../assets/Images/etc/Logo-2.png';

function Footer() {
  return (
    <section className='footer-container'>
      <div className='footer-left-box'>
        <h2>CINEMAGIC</h2>
        <p>subtitle</p>
        <hr />
        <footer>copyright © 2023 | CINEMAGIC.COM</footer>
      </div>
      <div className='footer-right-box'>
          <img src={brandLogo} alt="logo-pic" loading='lazy' />
      </div>
    </section>
  );
};

export default Footer;