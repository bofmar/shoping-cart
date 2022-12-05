import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='shop'>Shop</NavLink></li>
          <li><NavLink to='about'>About</NavLink></li>
          <li><NavLink to='checkout'>checkout</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
