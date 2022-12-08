import React from "react";
import ItemCard from './ItemCard';

export default function Items({ itemsList, type }) {

  return (
    <section className='shoping-area'>
      {itemsList.map(g => <ItemCard key={g.id} {...g} type={type} />)}
    </section>
  );
}
