import React from "react";
import HomeCarousel from './HomeCarousel';
import WelcomeSection from './WelcomeSection';

export default function Home() {
  return (
    <div className='home-page'>
      <HomeCarousel className='carousel' />
      <WelcomeSection />
    </div>
  );
}
