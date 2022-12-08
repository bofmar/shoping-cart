import React from "react";
import CheckoutCard from './CheckoutCard';
import Totals from './Totals';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ cart, removeFromCart }) {
  const navigate = useNavigate();
  return (
    <div className='checkout'>
      {cart.length ? cart.map(item => <CheckoutCard key={item.id} {...item} removeFromCart={removeFromCart} />) : 'No items'}
      {cart.length && <Totals cart={cart} />}
      {cart.length ? <button>Complete your purchase</button> : <button onClick={() => navigate('/shop')}>Back to the shop</button>}
    </div>
  )
}
