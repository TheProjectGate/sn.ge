import { useEffect } from 'react';
import './AboutUsSection.css';
import sectionImage1 from '../../assets/media/img/section-image/1.png';
import { animateOnScroll, animateButtons } from '../../assets/anima/animation.js';

function AboutUsSection() {
  useEffect(() => {
    const selector = '.sec--one-tittle.header';
    const buttonsSelector1 = '.topButton--list:nth-child(2)';
    const buttonsSelector2 = '.topButton--list:nth-child(3)';
    const cleanup = animateOnScroll(selector);

    const cleanupButtons = animateButtons(buttonsSelector1, buttonsSelector2);

    return () => {
      cleanup(); cleanupButtons();
    };
  }, []);

  return (
    <section className="section--one">
      <div className="sec--one-tittle header"><span>Who We Are</span></div>
      <div className="sec--one-image item-1"><img src={sectionImage1} alt="Inflatable advertising structure" /></div>
      <div className="sec--one-body item-2">
        <div className="sec--one-topButton">
          <a className="topButton--list tB--active" href="">our story</a>
          <a className="topButton--list" href="">first step</a>
          <a className="topButton--list" href="">creative solutions</a>
        </div>
        <div className="sec--one-bodyText">
          <h1>about us</h1>
          <h2>our story</h2>
          <p>We started our journey in 2012 with a simple goal — to create advertising that truly captures attention and leaves an impression. Initially, we focused on inflatable advertising constructions. Today, 90% of all inflatable constructions in Georgia are provided by SN Georgia. <br /><br />
             Over the years, we have diversified our business, producing a wide range of advertising structures and solutions, and have become one of the leading companies in outdoor advertising in Georgia, carving out our own unique niche in creative and unconventional advertising.<br /><br />
             Our team turns bold ideas into real projects: from eye-catching billboards and creative branding for bus stops to exhibition design and various 3D volumetric structures. Next, we’ll share our first experiences and some of the most memorable solutions that shaped our style and approach.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;