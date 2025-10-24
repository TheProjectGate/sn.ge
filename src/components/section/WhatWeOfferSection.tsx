import React, { useEffect, JSX } from 'react';
import '../../assets/styles/WhatWeOfferSection.scss';
import sectionImage3 from '../../assets/media/img/section-image/3.png';
import { animateOnScrollProgress } from '../../assets/anima/animation.js';

function WhatWeOfferSection(): JSX.Element {
  useEffect(() => {
    // Выбираем наш блок для анимации
    const selector = '.sec--third-body';
    // Вызываем вашу функцию анимации
    const cleanup = animateOnScrollProgress(selector);

    // Возвращаем функцию для очистки, когда компонент исчезнет
    return () => cleanup();
  }, []); // Пустой массив зависимостей, чтобы эффект выполнился один раз

  return (
    <section className="section--third">
      <div className="sec--third-body">
        <h1>WHAT WE OFFER</h1>
        <div className="sec--third-nav">
          <a className="sec--third-nav-left sec--third-nav-idle sec--third-nav-active" href="#">design service</a>
          <a className="sec--third-nav-right sec--third-nav-idle" href="#">consulting service</a>
        </div>
        <div className="sec--third-text">
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
        </div>
        <a className="sec--third-button" href="#">gallery</a>
      </div>
      <div className="sec--third-image"><img src={sectionImage3} alt="Big Sams Burger Billboard" /></div>
    </section>
  );
}

export default WhatWeOfferSection;