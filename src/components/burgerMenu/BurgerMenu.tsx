import { Link } from 'react-router-dom';
import '../../assets/styles/BurgerMenu.scss';
import facebookIcon from '../../assets/media/icon/facebook.svg';
import instagramIcon from '../../assets/media/icon/instagram.svg';
import youtubeIcon from '../../assets/media/icon/youtube.svg';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps): JSX.Element {
  return (
    <div className={`mobile-menu-content ${isOpen ? 'open' : ''}`}>
      <div className="mobile-logo"><a href="/" aria-label="SN Georgia Home"></a></div>
      <ul className="top--menu">
        <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
        <li><a href="#media" onClick={toggleMenu}>MEDIA</a></li>
      </ul>
      <div className="contact--button">
        <Link to="/contact" onClick={toggleMenu}>CONTACT US</Link>
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