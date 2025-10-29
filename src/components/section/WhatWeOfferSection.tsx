import React, { useEffect, useState, JSX } from 'react';
import '../../assets/styles/WhatWeOfferSection.scss';
import sectionImage3 from '../../assets/media/img/section-image/3.png';
import { animateOnScrollProgress } from '../../assets/anima/animation.js';

function WhatWeOfferSection(): JSX.Element {
  const [activeService, setActiveService] = useState('consulting');

  useEffect(() => {
    const selector = '.sec--third-body';
    const cleanup = animateOnScrollProgress(selector);
    return () => cleanup();
  }, []);

  const servicesContent = {
    design: (
      <p>We specialize in developing original, bold, 
         and memorable designs that reflect the essence of your brand. 
         Our team combines creativity with strategic 
         thinking to deliver visuals that not only look 
         impressive but also communicate your message clearly and effectively. 
         With extensive experience in outdoor creative advertising, 
         we know how to create designs that 
         capture attention in a busy environment and 
         leave a lasting impression on your audience. 
         Whether it’s a fresh campaign or a 
         complete brand identity, 
         we bring your vision to 
         life with a unique creative touch.
      </p>
    ),
    consulting: (
      <p>If you already have a design concept,
         we help you take it to the next level.
         Our consulting service focuses on analyzing,
         improving, and refining existing materials to make them more engaging,
         effective, and aligned with your goals.
         We provide insights into design trends,
         audience perception, and brand positioning,
         helping you unlock the full potential of your visual communication.
         By working closely with you, we enhance your ideas with a professional creative perspective,
         ensuring that every detail contributes to stronger impact and better results.
      </p>
    )
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, service: string) => {
    e.preventDefault();
    setActiveService(service);
  };

  return (
    <section className="section--third">
      <div className="sec--third-body">
        <h1>WHAT WE OFFER</h1>
        <div className="sec--third-nav">
          <a 
            className={`sec--third-nav-left sec--third-nav-idle ${activeService === 'design' ? 'sec--third-nav-active' : ''}`}
            href="#" 
            onClick={(e) => handleNavClick(e, 'design')}
          >
            design service
          </a>
          <a 
            className={`sec--third-nav-right sec--third-nav-idle ${activeService === 'consulting' ? 'sec--third-nav-active' : ''}`}
            href="#" 
            onClick={(e) => handleNavClick(e, 'consulting')}
          >
            consulting service
          </a>
        </div>
        <div className="sec--third-text">
          {servicesContent[activeService as keyof typeof servicesContent]}
        </div>
        <a className="sec--third-button" href="#">gallery</a>
      </div>
      <div className="sec--third-image"><img src={sectionImage3} alt="Big Sams Burger Billboard" /></div>
    </section>
  );
}

export default WhatWeOfferSection;