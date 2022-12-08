import React from "react";
import priceFormater from '../helpers/priceFormater';

export default function CheckoutCard({ name, image, price, id, removeFromCart }) {
  const formatedPrice = priceFormater(price);
  return (
    <div className='checkout-item'>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <div className='checkout-item-controls'>
        <p>{formatedPrice}</p>
        <button className='red-button' onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  );
}
