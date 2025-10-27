import React, { JSX, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navigation.scss';
import BurgerMenu from '../burgerMenu/BurgerMenu';

interface NavigationProps {
  isScrolled: boolean;
}

// Компонент будет получать isScrolled как "пропс" (свойство) от App.jsx
function Navigation({ isScrolled }: NavigationProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Мы используем переданный пропс для динамической установки класса */}
      <div className={`nav--container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo"><Link to="/" aria-label="SN Georgia Home"></Link></div>
        {/* На десктопе этот блок будет отображаться благодаря display: contents */}
        <div className="desktop-menu-content">
          <ul className="top--menu">
            <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
            <li><a href="#media" onClick={toggleMenu}>MEDIA</a></li>
          </ul>
          <div className="contact--button">
            <Link to="/contact">CONTACT US</Link>
          </div>
        </div>
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <button className="burger--menu" onClick={toggleMenu} aria-label="Open menu"></button>
      </div>
    </nav>
  );
}

export default Navigation;