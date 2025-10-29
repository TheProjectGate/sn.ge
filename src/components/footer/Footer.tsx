import React, { JSX } from 'react';
import '../../assets/styles/Footer.scss';
import facebookIcon from '../../assets/media/icon/facebook.svg';
import instagramIcon from '../../assets/media/icon/instagram.svg';
import youtubeIcon from '../../assets/media/icon/youtube.svg';
import logoBottom from '../../assets/media/svg/logo.svg';


function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer--container">
        <div className="footer--body">
          <span>
            <h1>PROJECT GALLERY</h1>
            <a href="#">INFLATABLE ADS</a>
            <a href="#">3D BILLBOARDS</a>
            <a href="#">BUS STOPS</a>
            <a href="#">FACADE ADS</a>
            <a href="#">EXHIBITIONS</a>
            <a href="#">OTHER</a>
          </span>
          <span>
            <h1>SERVICES</h1>
            <a href="#">DESIGN SERVICE</a>
            <a href="#">CONSULTATION SERVICE</a>
            <a href="#">PRODUCTION</a>
          </span>
          <span>
            <h1>SERVICES</h1>
            <p>D Block, Stamba Hotel</p>
            <p>14 M.Kostava st.</p>
            <p>PHONE:  558 23 23 20</p>
            <p>E-MAIL: INFO@SMITH.GE</p>
          </span>
          <div className="social--links">
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer--bottom">
          <h2>© 2025 SN GEORGIA LLC</h2>
          <a href="#"><img src={logoBottom} alt="SN Georgia Logo" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;