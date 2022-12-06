import React, { useState } from "react";
import facebook from '../images/facebook-svgrepo-com.svg';
import linkedIn from '../images/linkedin-svgrepo-com.svg';
import twitter from '../images/twitter-square-svgrepo-com.svg';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <footer>
      <div className='footer-logo'>
        <h1>Get Loud!</h1>
      </div>
      <div className='contact'>
        <h4>Get Loud! Guitar Shop, Inc.</h4>
        <p>1234 Fake Street</p>
        <p>getloud@fake.false</p>
        <p>+1 234 567 8910</p>
        <div className='media'>
          <img className='media-logo' src={facebook} />
          <img className='media-logo' src={linkedIn} />
          <img className='media-logo' src={twitter} />
        </div>
      </div>
      <from className='signup-form'>
        <h3>Sign up for our newsletter and</h3>
        <h2>Save 10% on your next purchase</h2>
        <input type='text' placeholder='Full name' value={name} onChange={(e) => handleName(e)} />
        <input type='email' placeholder='Email address' value={email} onChange={(e) => handleEmail(e)} />
        <button className='red-button form-button' >SIGN ME UP</button>
      </from>
    </footer>
  );
}
