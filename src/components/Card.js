import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Card({ image, title, body }) {
  const navigate = useNavigate();
  return (
    <div className='home-card'>
      <img src={image} />
      <h2 className='red-text'>{title.toUpperCase()}</h2>
      <p>{body}</p>
      <button className='red-button card-button' onClick={() => navigate('/about')}>Learn More</button>
    </div>
  );
}
