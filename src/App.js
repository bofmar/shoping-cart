import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Items from './components/Items';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import NoRoute from './components/NoRoute';
import './App.css';
import items from './data/items';

const ItemsContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart(prevCart => [...prevCart, item])
  }

  function removeFromCart(item) {
    setCart(prevCart => prevCart.filter(i => i.id !== item.id));
  }

  return (
    <>
      <ItemsContext.Provider value={items}>
        <Header cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />}>
            <Route index element={<Items itemsList={items.guitars} type='guitars' />} />
            <Route path='guitars' element={<Items itemsList={items.guitars} type='guitars' />} />
            <Route path='amps' element={<Items itemsList={items.amps} type='amps' />} />
            <Route path='pedals' element={<Items itemsList={items.pedals} type='pedals' />} />
            <Route path='accessories' element={<Items itemsList={items.accessories} type='accessories' />} />
          </Route>
          <Route path='shop/:type/:itemId' element={<ProductPage addToCart={addToCart} />} />
          <Route path='checkout' element={<Checkout cart={cart} />} />
          <Route path='*' element={<NoRoute />} />
        </Routes>
      </ItemsContext.Provider>
    </>
  );
}

export default App;
export { ItemsContext };
