import React from "react";
import { useNavigate } from 'react-router-dom';
import priceFormater from '../helpers/priceFormater';

export default function ItemCard({ name, price, image, id, type, brand }) {
  const navigate = useNavigate();

  const formatedPrice = priceFormater(price);

  return (
    <div className='card-wrapper' onClick={() => navigate(`/shop/${type}/${id}`)}>
      <img src={image} alt={name} />
      <h2>{brand.toUpperCase()}</h2>
      <h1>{name}</h1>
      <p>{formatedPrice}</p>
    </div>
  );
}
