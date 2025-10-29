import React, { JSX, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navigation.scss';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import ServicesIcon from '../icons/ServicesIcon';
import MediaIcon from '../icons/MediaIcon';
import GalleryIcon from '../icons/GalleryIcon';
import ContactIcon from '../icons/ContactIcon';

interface NavigationProps {
  isScrolled: boolean;
  isGalleryPage?: boolean;
  stickyFilters?: {
    show: boolean;
    categories: string[];
    activeFilter: string;
    onFilterChange: (category: string) => void;
    getCategoryCount: (category: string) => number;
  };
}

// Компонент будет получать isScrolled как "пропс" (свойство) от App.jsx
function Navigation({ isScrolled, isGalleryPage, stickyFilters }: NavigationProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Когда мобильное меню открыто, мы не должны показывать иконки,
  // даже если страница за ним прокручена.
  const showIcons = isGalleryPage && isScrolled && !isMenuOpen;

  return (
    <nav>
      {/* Мы используем переданный пропс для динамической установки класса */}
      {/* Когда меню открыто, убираем класс 'scrolled', чтобы избежать нежелательных стилей */}
      <div className={`nav--container ${isScrolled && !isMenuOpen ? 'scrolled' : ''} ${stickyFilters?.show ? 'with-filters' : ''} ${isGalleryPage ? 'gallery-page-nav' : ''} ${showIcons ? 'icons-mode' : ''}`}>
        <div className="logo"><Link to="/" aria-label="SN Georgia Home"></Link></div>
        
        {/* Sticky фильтры галереи */}
        {stickyFilters?.show && (
          <div className="sticky-gallery-filters">
            {stickyFilters.categories.map(category => (
              <button 
                key={category} 
                onClick={() => stickyFilters.onFilterChange(category)} 
                className={stickyFilters.activeFilter === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Меню и кнопка теперь прямые дети .nav--container для стабильного позиционирования в гриде */}
        <ul className={`top--menu desktop-only ${isGalleryPage ? 'top-menu-gallery' : ''}`}>
          <li>
            <Link to={isGalleryPage ? "/#services" : "#services"} onClick={isMenuOpen ? toggleMenu : undefined}>
              {showIcons ? <ServicesIcon /> : 'SERVICES'}
            </Link>
          </li>
          <li>
            <Link to={isGalleryPage ? "/#media" : "#media"} onClick={isMenuOpen ? toggleMenu : undefined}>
              {showIcons ? <MediaIcon /> : 'MEDIA'}
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              {showIcons ? <GalleryIcon /> : 'GALLERY'}
            </Link>
          </li>
        </ul>
        <div className={`contact--button desktop-only ${isGalleryPage ? 'contact-button-gallery' : ''}`}>
          <Link to="/contact">
            {showIcons ? <ContactIcon /> : 'CONTACT US'}
          </Link>
        </div>

        <BurgerMenu 
          isOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
          stickyFilters={stickyFilters}
        />
        <button className={`burger--menu ${isGalleryPage ? 'gallery-burger' : ''}`} onClick={toggleMenu} aria-label="Open menu"></button>
      </div>
    </nav>
  );
}

export default Navigation;
