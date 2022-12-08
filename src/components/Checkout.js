import React from "react";
import CheckoutCard from './CheckoutCard';
import Totals from './Totals';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ cart, removeFromCart }) {
  const navigate = useNavigate();
  return (
    <div className='checkout'>
      {cart.length ? cart.map(item => <CheckoutCard key={item.id} {...item} removeFromCart={removeFromCart} />) : <h1>Your cart is empty</h1>}
      {cart.length ? <Totals cart={cart} /> : null}
      {cart.length ? <button className='transparent-button-red'>Complete your purchase</button> : <button className='transparent-button-red' onClick={() => navigate('/shop')}>Back to the shop</button>}
    </div>
  )
}
