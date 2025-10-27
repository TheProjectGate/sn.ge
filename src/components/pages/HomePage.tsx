import React from 'react';
import AboutUsSection from '../section/AboutUsSection';
import WhatWeDoSection from '../section/WhatWeDoSection';
import WhatWeOfferSection from '../section/WhatWeOfferSection';
import ProjectsSection from '../section/ProjectsSection';
import ClientsSection from '../section/ClientsSection';
import ContactSection from '../section/ContactSection';

const HomePage: React.FC = () => {
  return (
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
      <section>
        <ContactSection />
      </section>
    </main>
  );
};

export default HomePage;
