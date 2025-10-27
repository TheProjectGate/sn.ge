import React, { useState, useEffect, JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';

function AppContent(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

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
      {!isContactPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Router basename="/sn.ge">
      <AppContent />
    </Router>
  );
}

export default App;
