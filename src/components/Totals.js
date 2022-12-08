import React from "react";
import priceFormater from '../helpers/priceFormater';

export default function Totals({ cart }) {
  return (
    <h1>Total price: {priceFormater(cart.reduce((total, item) => total + item.price, 0))}</h1>
  )
}
