import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../App';
import { nanoid } from 'nanoid';
import priceFormater from '../helpers/priceFormater';

export default function ProductPage({ addToCart }) {
  const { itemId, type } = useParams();
  const items = useContext(ItemsContext);

  const findItem = () => {
    return items[type].filter(item => item.id === itemId);
  }

  const [item] = [...findItem()];
  const formatedPrice = priceFormater(item.price);

  return (
    <div className='product-page'>
      <div className='product-wrapper'>
        <img src={item.image} alt={item.name} className='product-image' />
        <h1>{item.name}</h1>
        <img src={require(`../images/company-logos/${item.brand}-logo.png`)} alt={item.brand} className='product-logo' />
        <p className='description'>{item.description}</p>
        <div className='product-page-button-section'>
          <p>{formatedPrice}</p>
          <button onClick={() => addToCart({ ...item, id: nanoid() })} className='red-button'>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
