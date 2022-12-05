import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../App';

export default function ProductPage({ addToCart }) {
  const { itemId, type } = useParams();
  const items = useContext(ItemsContext);

  const findItem = () => {
    return items[type].filter(item => item.id === itemId);
  }

  const [item] = [...findItem()];

  return (
    <>
      <img src={item.image} alt={item.name} />
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </>
  );
}
