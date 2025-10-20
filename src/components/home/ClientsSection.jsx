import React from 'react';
import './ClientsSection.css';
import mcdonaldsLogo from '../../assets/media/img/canvas-clients-logo/McDonald\'s.png';
import cocacolaLogo from '../../assets/media/img/canvas-clients-logo/coca-cola.png';
import jyskLogo from '../../assets/media/img/canvas-clients-logo/jysk.png';
import m2Logo from '../../assets/media/img/canvas-clients-logo/m2.png';
import lbLogo from '../../assets/media/img/canvas-clients-logo/lb.png';
import lisiLogo from '../../assets/media/img/canvas-clients-logo/lisi.png';
import symetriLogo from '../../assets/media/img/canvas-clients-logo/symetri.png';


function ClientsSection() {
  return (
    <section className="section--fifth">
      <span className="sec--fifth-tittle"><h1>OUR CLIENTS</h1></span>
      <div className="sec--fifth-canvas">
        <a className="sec--fifth-lb" href=""></a>
        <img src={mcdonaldsLogo} alt="McDonald's Logo" />
        <img src={cocacolaLogo} alt="Coca-Cola Logo" />
        <img src={jyskLogo} alt="JYSK Logo" />
        <img src={m2Logo} alt="m2 Logo" />
        <img src={lbLogo} alt="Leader-Bet Logo" />
        <img src={lisiLogo} alt="Lisi Development Logo" />
        <img src={symetriLogo} alt="Symetri Park Logo" />
        <a className="sec--fifth-rb" href=""></a>
      </div>
      <div className="sec--fifth-body">
        <div className="sec--fifth-cont">
          <span><h1>500+</h1></span>
          <h3>successfully completed projects</h3>
        </div>
        <div className="sec--fifth-cont">
          <span><h1>180+</h1></span>
          <h3>3D BILLBOARDS CREATED</h3>
        </div>
        <div className="sec--fifth-cont">
          <span><h1>86+</h1></span>
          <h3>iNFLATABLE CONSTRUCTIONS CREATED</h3>
        </div>
        <div className="sec--fifth-cont">
          <span><h1>300+</h1></span>
          <h3>CREATIVE SOLUTIONS</h3>
        </div>
        <div className="sec--fifth-cont">
          <span><h1>160+</h1></span>
          <h3>DESIGN PROJECTS COMPLETED</h3>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;