import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import cartIcon from '../images/full-shoping-cart-svgrepo-com.svg';

export default function Header({ cart }) {
  return (
    <header>
      <div className='logo'>
        <img src={logo} />
        <h1 className='company-name'>Get Loud!</h1>
      </div>
      <nav className='header-nav'>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='shop'>Shop</NavLink></li>
          <li><NavLink to='about'>About</NavLink></li>
          <li className='relative'><NavLink to='checkout'><img className='cart-icon' src={cartIcon} /><span className='total items'>{cart.length}</span></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
