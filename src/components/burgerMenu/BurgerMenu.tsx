import { Link } from 'react-router-dom';
import '../../assets/styles/BurgerMenu.scss';
import { useLocation } from 'react-router-dom';
import facebookIcon from '../../assets/media/icon/facebook.svg';
import instagramIcon from '../../assets/media/icon/instagram.svg';
import youtubeIcon from '../../assets/media/icon/youtube.svg';
import { JSX } from 'react';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  stickyFilters?: {
    show: boolean;
    categories: string[];
    activeFilter: string;
    onFilterChange: (category: string) => void;
    getCategoryCount: (category: string) => number;
  };
}

function BurgerMenu({ isOpen, toggleMenu, stickyFilters }: BurgerMenuProps): JSX.Element {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleFilterChange = (category: string) => {
    stickyFilters?.onFilterChange(category);
    toggleMenu();
  };

  return (
    <div className={`mobile-menu-content ${isOpen ? 'open' : ''}`}>
      <div className="mobile-logo"><a href="/" aria-label="SN Georgia Home"></a></div>
      
      {/* Фильтры галереи в бургер меню */}
      {location.pathname.startsWith('/gallery') && (
        <div className="burger-gallery-filters">
          <h3>Gallery Filters</h3>
          {stickyFilters && (
            <div className="filter-list">
              {stickyFilters.categories.map(category => (
                <button 
                  key={category} 
                  onClick={() => handleFilterChange(category)} 
                  className={stickyFilters.activeFilter === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <ul className="top--menu">
        <li><Link to={isHomePage ? "#services" : "/#services"} onClick={toggleMenu}>SERVICES</Link></li>
        <li><Link to={isHomePage ? "#media" : "/#media"} onClick={toggleMenu}>MEDIA</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
      </ul>
      <div className="contact--button">
        <Link to="/contact">CONTACT US</Link>
      </div>
      <div className="social--links">
        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
      </div>
    </div>
  );
}

export default BurgerMenu;