import React, { useState, JSX } from 'react';
import '../../assets/styles/WhatWeDoSection.scss';
import navIconArrow from '../../assets/media/icon/arow.svg';
import sectionImage2 from '../../assets/media/img/section-image/2.png';

function WhatWeDoSection(): JSX.Element {
  const categories = [
    'inflatable ads',
    '3d billboards',
    'bus stops',
    'EXHIBITIONS',
    'FACADE DESIGN',
    '3D CONSTRUCIONS',
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    setActiveCategory(category);
  };

  return (
    <section className="section--second">
      <div className="sec--second-tittle header"><span>What We Do</span></div>
      <div className="sec--second-image item-1"><img src={sectionImage2} alt="Creative 3D billboard" /></div>
      <div className="sec--second-body item-2">
        <ul className="sec--second-links">
          {categories.map((category) => (
            <li key={category} className={activeCategory === category ? 'active' : ''}>
              {activeCategory === category && <img className="active" src={navIconArrow} alt="" />}
              <a href="#" onClick={(e) => handleCategoryClick(e, category)}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhatWeDoSection;