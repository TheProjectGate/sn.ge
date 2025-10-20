import React from 'react';
import './ContactSection.css';
import sectionImage4 from '../../assets/media/img/section-image/4.png';

function ContactSection() {
  return (
    <section className="section--sixth">
      <div className="sec--sixth-body">
        <img src={sectionImage4} alt="Planning a creative ad campaign?" />
      </div>
      <a href="#contact">contact us</a>
    </section>
  );
}

export default ContactSection;