import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../App';

export default function ProductPage() {
  const { itemId, type } = useParams();
  const items = useContext(ItemsContext);

  const findItem = () => {
    return items[type].filter(item => item.id === itemId);
  }

  const [item] = [...findItem()];

  return (
    <img src={item.image} alt={item.name} />
  );
}
