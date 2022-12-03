import React from "react";
import ItemCard from './ItemCard';

export default function Shop({ guitars, amps, pedals, accessories }) {
  return (
    <div className='product-area'>
      {guitars.map(g => <ItemCard key={g.id} {...g} />)}
    </div>
  );
}
