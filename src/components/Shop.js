import React from "react";
import { Outlet } from 'react-router-dom';

export default function Shop() {
  return (
    <div className='product-area'>
      <Outlet />
    </div>
  );
}
