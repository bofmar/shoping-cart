import React from "react";
import { Outlet, NavLink } from 'react-router-dom';

export default function Shop() {
  return (
    <>
      <nav className='sidebar'>
        <ul>
          <li><NavLink to='guitars'>Guitars</NavLink></li>
          <li><NavLink to='amps'>Amplifiers</NavLink></li>
          <li><NavLink to='pedals'>Pedals/Effects</NavLink></li>
          <li><NavLink to='accessories'>Accessories</NavLink></li>
        </ul>
      </nav>
      <div className='product-area'>
        <Outlet />
      </div>
    </>
  );
}
