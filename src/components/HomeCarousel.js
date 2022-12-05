import React from "react";
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../images/banner1.jpeg';
import banner2 from '../images/banner2.jpeg';
import banner3 from '../images/banner3.jpeg';
import banner4 from '../images/banner4.jpeg';

export default function HomeCarousel() {
  const navigate = useNavigate();
  return (
    <Carousel autoPlay={false} infiniteLoop={true}>
      <div className='carousel-wrapper relative'>
        <img src={banner1} />
        <div className='legend'>
          <h2>Shop Local, Shop Smart</h2>
          <p>From beginners to pros, we've got you covered.</p>
          <p>Come and see us!</p>
          <div className='legend-buttons'>
            <button onClick={() => navigate('/shop')} className='red-button'>GUITARS</button>
            <button onClick={() => navigate('/about')} className='transparent-button'>LOCATIONS</button>
          </div>
        </div>
      </div>
      <div className='carousel-wrapper relative'>
        <img src={banner2} />
        <div className='legend'>
          <h2>World Class Repairs</h2>
          <p>We'll take the guesswork out of your musical instrument repair.</p>
          <div className='legend-buttons'>
            <button onClick={() => navigate('/about')} className='red-button'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className='carousel-wrapper relative'>
        <img src={banner3} />
        <div className='legend'>
          <h2>This Holiday Season GET LOUD!</h2>
          <p>Save up to 30% on all your purchases, and rock Santa's socks off!</p>
          <div className='legend-buttons'>
            <button onClick={() => navigate('/shop')} className='red-button'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className='carousel-wrapper relative'>
        <img src={banner4} />
        <div className='legend'>
          <h2>Learning Center</h2>
          <p>Individualized music lessons for students of all ages and skill level</p>
          <div className='legend-buttons'>
            <button onClick={() => navigate('/about')} className='red-button'>LEARN MORE</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
