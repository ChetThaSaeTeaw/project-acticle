import React from 'react';

// CSS
import "./Footer.scss";

function Footer() {
  return (
    <section className='footer-container'>
      <div className='footer-left-box'>
        <h2>MOVIESKIMI</h2>
        <p>subtitle</p>
        <hr />
        <footer>copyright © 2023 | MOVIESKIMI.COM</footer>
      </div>
      <div className='footer-right-box'>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lion-head-logo-design-template-free-gold-f1effbb505e9610e66caa94f2d26dea2_screen.jpg?ts=1634993027" alt="logo-pic" loading='lazy' />
      </div>
    </section>
  );
};

export default Footer;