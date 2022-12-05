import React from "react";

export default function Checkout({ cart }) {
  return (
    <>
      {cart.length ? cart.map(item => <h1 key={item.id}>{item.name}</h1>) : 'No items'}
    </>
  )
}
