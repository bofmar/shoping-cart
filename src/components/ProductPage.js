import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../App';
import { nanoid } from 'nanoid';

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
      <img src={require(`../images/company-logos/${item.brand}-logo.png`)} alt={item.brand} />
      <button onClick={() => addToCart({ ...item, id: nanoid() })}>Add to cart</button>
    </>
  );
}
