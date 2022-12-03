import React from "react";

export default function Shop({ name, price, image }) {
  return (
    <div className='card-wrapper'>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
}
