import React from "react";
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className='call-to-action'>
      <div className='cta-text'>
        <h2>Get Loud! Is The Ultimate One-Stop Guitar Store</h2>
        <p>We pride ourselves on quality customer service, professional expertise, and attention to dtail.</p>
      </div>
      <button className='inverse-button' onClick={() => navigate('/about')}>LEARN MORE</button>
    </section>
  );
}
