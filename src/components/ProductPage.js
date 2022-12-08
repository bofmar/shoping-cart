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
  const formatedPrice = item.price.toLocaleString('en-IN', { style: 'currency', currency: 'EUR' });

  return (
    <div className='product-page'>
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <img src={require(`../images/company-logos/${item.brand}-logo.png`)} alt={item.brand} />
      <p className='description'>{item.description}</p>
      <div className='product-page-button-section'>
        <p>{formatedPrice}</p>
        <button onClick={() => addToCart({ ...item, id: nanoid() })}>Add to cart</button>
      </div>
    </div>
  );
}
