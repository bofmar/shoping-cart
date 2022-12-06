import React from "react";
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../images/welcome-pic.jpeg';

export default function WelcomeSection() {
  const navigate = useNavigate();
  return (
    <section className='welcome-section'>
      <img src={welcomeImage} alt='guitar' />
      <div>
        <p className='red-text'>Welcome to</p>
        <h2 className='red-text'>Get Loud! Guitar shop</h2>
        <p>We are the ultimate one-stop music store with quality customer service, professional expertise, and attention to detail. We specialize in musical instrument repairs, rentals, sales, and lessons.</p>
        <p>Owned and operated by musicians for musicians.</p>
        <div className='welcome-section-buttons'>
          <button onClick={() => navigate('/about')} className='transparent-button-red'>LEARN MORE</button>
          <button onClick={() => navigate('/shop')} className='red-button'>SEE OUR PRODUCTS</button>
        </div>
      </div>
    </section>
  );
}
