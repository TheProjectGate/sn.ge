import React, { useState, useEffect, JSX } from 'react';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import AboutUsSection from './components/home/AboutUsSection';
import WhatWeDoSection from './components/home/WhatWeDoSection';
import WhatWeOfferSection from './components/home/WhatWeOfferSection';
import ProjectsSection from './components/home/ProjectsSection';
import ClientsSection from './components/home/ClientsSection';
import ContactSection from './components/home/ContactSection';


function App(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Добавляем слушатель события скролла
    window.addEventListener('scroll', handleScroll);

    // Очищаем слушатель, когда компонент будет удален
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив означает, что эффект запустится только один раз

  return (
    <div className="wrapper">
      {/* Передаем состояние isScrolled в компонент Navigation */}
      <Navigation isScrolled={isScrolled} />
      <Header />
      <main>
        <section id="about">
          <AboutUsSection />
        </section>
        <section id="what-we-do">
          <WhatWeDoSection />
        </section>
        <section id="services">
          <WhatWeOfferSection />
        </section>
        <section id="media">
          <ProjectsSection />
        </section>
        <section id="clients">
          <ClientsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
