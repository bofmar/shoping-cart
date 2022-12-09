import React from "react";
import about1 from '../images/about1.jpeg';
import about2 from '../images/about2.jpeg';
import about3 from '../images/about3.jpeg';
import about4 from '../images/about4.jpeg';

export default function About() {
  return (
    <div className='about-page'>
      <section>
        <h1>Get Loud! The One Stop Guitar Shop for Everyone</h1>
        <div className='paragraph-with-image'>
          <img src={about1} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed auctor eros, id auctor sem. Donec accumsan nibh faucibus eros pharetra tincidunt ac vel arcu. In hac habitasse platea dictumst. Sed scelerisque pharetra arcu, sed scelerisque turpis blandit a. Vestibulum malesuada urna eu purus scelerisque, eu elementum est imperdiet. Donec quis ante neque. Sed id diam metus. Ut quis nulla pretium, ultrices sem vitae, sagittis nunc. Aliquam fermentum ante diam. </p>
        </div>
      </section>
      <section>
        <h1>Our Rental Program</h1>
        <div className='paragraph-with-image'>
          <img src={about4} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed auctor eros, id auctor sem. Donec accumsan nibh faucibus eros pharetra tincidunt ac vel arcu. In hac habitasse platea dictumst. Sed scelerisque pharetra arcu, sed scelerisque turpis blandit a. Vestibulum malesuada urna eu purus scelerisque, eu elementum est imperdiet. Donec quis ante neque. Sed id diam metus. Ut quis nulla pretium, ultrices sem vitae, sagittis nunc. Aliquam fermentum ante diam. </p>
        </div>
      </section>
      <section>
        <h1>Repairs</h1>
        <div className='paragraph-with-image'>
          <img src={about3} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed auctor eros, id auctor sem. Donec accumsan nibh faucibus eros pharetra tincidunt ac vel arcu. In hac habitasse platea dictumst. Sed scelerisque pharetra arcu, sed scelerisque turpis blandit a. Vestibulum malesuada urna eu purus scelerisque, eu elementum est imperdiet. Donec quis ante neque. Sed id diam metus. Ut quis nulla pretium, ultrices sem vitae, sagittis nunc. Aliquam fermentum ante diam. </p>
        </div>
      </section>
      <section>
        <h1>Learning Center</h1>
        <div className='paragraph-with-image'>
          <img src={about2} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed auctor eros, id auctor sem. Donec accumsan nibh faucibus eros pharetra tincidunt ac vel arcu. In hac habitasse platea dictumst. Sed scelerisque pharetra arcu, sed scelerisque turpis blandit a. Vestibulum malesuada urna eu purus scelerisque, eu elementum est imperdiet. Donec quis ante neque. Sed id diam metus. Ut quis nulla pretium, ultrices sem vitae, sagittis nunc. Aliquam fermentum ante diam. </p>
        </div>
      </section>
    </div>
  );
}
