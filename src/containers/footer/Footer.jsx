import React from 'react';
import './footer.css';

import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <>
    <div className='gpt3__footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
          <button type="button">Request Early Access</button>
      </div>
      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content__logo'>
          <img src={logo} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
          <div className='gpt3__footer-content__links'>
            <h5>Links</h5>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>

          </div>
          <div className='gpt3__footer-content__links'>
            <h5>Company</h5>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>

          </div>
          <div className='gpt3__footer-content__links'>
            <h5>Get in touch</h5>
            <ul>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>

          </div>
          
      </div>
    </div>
    <div className='gpt3__footer-copyright'>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer;
