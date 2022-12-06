import React from "react";
import fender from '../images/company-logos/fender-logo.png';
import gibson from '../images/company-logos/gibson-logo.png';
import ibanez from '../images/company-logos/ibanez-logo.png';
import jackson from '../images/company-logos/jackson-logo.png';
import kramer from '../images/company-logos/kramer-logo.png';

export default function ProSection() {
  return (
    <section className='pro-section'>
      <h2 className='red-text'>Visit the Pro Shop at Get Loud!'s Guitar Shop</h2>
      <p>We carry instruments for professional musicians and advancing students from the world’s leading manufacturers of intermediate and professional musical instruments. Our line includes Besson, Selmer, Bach, Gemeinhardt, Buffet, Holton, XO, Schreiber, Fox Renard, and many other top brands!</p>
      <div className='brand-images-wrapper'>
        <img className='brand-logo' src={fender} />
        <img className='brand-logo' src={gibson} />
        <img className='brand-logo' src={ibanez} />
        <img className='brand-logo' src={jackson} />
        <img className='brand-logo' src={kramer} />
      </div>
    </section>
  )
}
