import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import AboutUsSection from './components/home/AboutUsSection';
import WhatWeDoSection from './components/home/WhatWeDoSection';
import WhatWeOfferSection from './components/home/WhatWeOfferSection';
import ProjectsSection from './components/home/ProjectsSection';
import ClientsSection from './components/home/ClientsSection';
import ContactSection from './components/home/ContactSection';


function App() {
  // Это состояние будет отслеживать, прокручена ли страница
  const [isScrolled, setIsScrolled] = useState(false);

  // Этот хук выполнится один раз при загрузке страницы
  useEffect(() => {
    // Функция, которая будет вызываться при скролле
    const handleScroll = () => {
      // Если прокрутка больше 10px, меняем состояние
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
        <section>
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
