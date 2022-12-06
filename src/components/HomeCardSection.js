import React from "react";
import Card from './Card';
import note from '../images/music-note-svgrepo-com.svg';
import tools from '../images/tools-svgrepo-com.svg';
import idea from '../images/idea-svgrepo-com.svg';

export default function HomeCardSection() {
  return (
    <section className='card-section'>
      <Card image={note} title='rentals' body='Our instrument rental program is a convenient and affordable way to get your student started. We rent only the highest-quality band and orchestra instruments to ensure that your student has the best opportunity to succeed.' />
      <Card image={tools} title='repairs' body='We are committed to providing fast and reliable repair services. From beginning musician to seasoned pro, we have the expertise, experience, and equipment to get your gear back in top condition.' />
      <Card image={idea} title='learning center' body='Everyone can benefit from learning music! We have a staff of over 30 highly-trained, professional musicians with proven teaching experience, all boasting impressive résumés in learning and performance. Come learn with us!' />
    </section>
  );
}
