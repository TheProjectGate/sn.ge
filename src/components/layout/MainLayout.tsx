import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <Navigation isScrolled={isScrolled} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
