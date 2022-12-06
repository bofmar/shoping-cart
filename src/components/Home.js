import React from "react";
import HomeCarousel from './HomeCarousel';
import WelcomeSection from './WelcomeSection';
import HomeCardSection from './HomeCardSection';
import ProSection from './ProSection';

export default function Home() {
  return (
    <div className='home-page'>
      <HomeCarousel className='carousel' />
      <WelcomeSection />
      <HomeCardSection />
      <ProSection />
    </div>
  );
}
