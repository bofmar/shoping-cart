import React from "react";
import HomeCarousel from './HomeCarousel';

export default function Home() {
  return (
    <div className='home-page'>
      <HomeCarousel className='carousel' />
      <h1>Home page</h1>
    </div>
  );
}
