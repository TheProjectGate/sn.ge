import { useEffect, useState } from 'react';
import '../../assets/styles/AboutUsSection.scss';
import sectionImage1 from '../../assets/media/img/section-image/1.png';
import sectionImage2 from '../../assets/media/img/section-image/6.png';
import sectionImage3 from '../../assets/media/img/section-image/7.png';
import { animateOnScroll, animateOnScrollOnce } from '../../assets/anima/animation.js';

const tabs = [
  {
    id: 'our-story',
    title: 'our story',
    image: sectionImage1,
    alt: 'Inflatable advertising structure',
    content: {
      h1: 'about us',
      h2: 'our story',
      p: `We started our journey in 2012 with a simple goal — to create advertising that truly captures attention and leaves an impression. Initially, we focused on inflatable advertising constructions. Today, 90% of all inflatable constructions in Georgia are provided by SN Georgia. <br /><br />
          Over the years, we have diversified our business, producing a wide range of advertising structures and solutions, and have become one of the leading companies in outdoor advertising in Georgia, carving out our own unique niche in creative and unconventional advertising.<br /><br />
          Our team turns bold ideas into real projects: from eye-catching billboards and creative branding for bus stops to exhibition design and various 3D volumetric structures. Next, we’ll share our first experiences and some of the most memorable solutions that shaped our style and approach.`
    }
  },
  {
    id: 'first-step',
    title: 'first step',
    image: sectionImage2,
    alt: 'Early advertising project',
    content: {
      h1: 'Our First Project',
      h2: 'The Beginning of a Big Story',
      p: `When we were just starting out, we had one clear goal — to create something truly new for the market. Not just another familiar solution lost among countless city ads, but an idea that could catch the eye, spark a smile, and make people stop and admire the advertising again and again.<br /><br />

We decided to begin with something truly grand — bold, eye-catching, and even a little playfully exciting. That’s how inflatable advertising came to life:<br /><br />

- giant balloons floating under shopping mall ceilings,<br /><br />

- spectacular arches at racing events,<br /><br />

- huge festive figures that instantly create a holiday mood.<br /><br />

Our very first project was bold, bright, and unforgettable — a giant hot air balloon replica created for McCann and the Raffaello campaign.<br /><br />

That’s how our journey into inflatable advertising began.
Since then, we’ve been bringing ideas to life on a bigger, brighter, and more exciting scale.
`
    }
  },
  {
    id: 'creative-solutions',
    title: 'creative solutions',
    image: sectionImage3,
    alt: 'Innovative 3D billboard',
    content: {
      h1: 'other creative solutions',
      h2: 'And It Keeps Going…',
      p: `Over time, we started looking for new ways to experiment with dimensional design to create something unusual. Our first focus was billboards. Yes, who would have thought it, but some of the most eye-catching and memorable billboards are our work.<br /><br />

We experimented with inflatable structures on billboards, illuminated letters, lightboxes, protruding elements.<br /><br />

We tried everything that could turn a standard banner into an impressive 3D billboard. Long brainstorming sessions and project discussions paid off: our advertising always stood out and was memorable.<br /><br />

As expected, and true to our style, we continued pushing boundaries and exploring new areas of advertising. Today we offer:<br /><br />

- any type of 3D structures,<br /><br />

- creative branding for bus stops,<br /><br />

- exhibition design, and much more.<br /><br />

We don’t just come up with ideas — we bring them to life. There are no limits to imagination, so we’re always ready for new and exciting challenges.
`
    }
  }
];

function AboutUsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const selector = '.sec--one-tittle.header';
    const buttonsContainerSelector = '.sec--one-topButton';
    const cleanup = animateOnScroll(selector);
    const cleanupButtons = animateOnScrollOnce(buttonsContainerSelector);

    return () => {
      cleanup();
      cleanupButtons();
    };
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, tabId: string) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="section--one">
      <div className="sec--one-tittle header"><span>Who We Are</span></div>
      {activeContent && (
        <>
          <div className="sec--one-image item-1">
            <img src={activeContent.image} alt={activeContent.alt} />
          </div>
          <div className="sec--one-body item-2">
            <div className="sec--one-topButton" data-animation="true">
              {tabs.map(tab => (
                <a
                  key={tab.id}
                  className={`topButton--list ${activeTab === tab.id ? 'tB--active' : ''}`}
                  href="#"
                  onClick={(e) => handleTabClick(e, tab.id)}
                >
                  {tab.title}
                </a>
              ))}
            </div>
            <div className="sec--one-bodyText">
              <h1>{activeContent.content.h1}</h1>
              <h2>{activeContent.content.h2}</h2>
              <p dangerouslySetInnerHTML={{ __html: activeContent.content.p }}></p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default AboutUsSection;