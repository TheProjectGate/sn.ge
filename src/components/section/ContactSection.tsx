import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/ContactSection.scss';
import sectionImage4 from '../../assets/media/img/section-image/4.png';

function ContactSection(): JSX.Element {
  return (
    <section className="section--sixth">
      <div className="sec--sixth-body">
        <img src={sectionImage4} alt="Planning a creative ad campaign?" />
      </div>
      <Link to="/contact">contact us</Link>
    </section>
  );
}

export default ContactSection;