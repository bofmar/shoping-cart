import React from "react";
import ItemCard from './ItemCard';

export default function Items({ itemsList, type }) {

  return (
    <>
      {itemsList.map(g => <ItemCard key={g.id} {...g} type={type} />)}
    </>
  );
}
