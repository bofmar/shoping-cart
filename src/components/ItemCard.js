import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ItemCard({ name, price, image, id, type }) {
  const navigate = useNavigate();

  return (
    <div className='card-wrapper' onClick={() => navigate(`/shop/${type}/${id}`)}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
}
