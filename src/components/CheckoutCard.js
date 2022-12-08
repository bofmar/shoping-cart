import React from "react";
import priceFormater from '../helpers/priceFormater';

export default function CheckoutCard({ name, image, price, id, removeFromCart }) {
  const formatedPrice = priceFormater(price);
  return (
    <div className='checkout-item'>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{formatedPrice}</p>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
}
