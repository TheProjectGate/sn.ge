import React, { JSX } from 'react';
import './ProjectsSection.css';
import projectImg1 from '../../assets/media/img/canvas-gallery/1.png';
import projectImg2 from '../../assets/media/img/canvas-gallery/2.png';
import projectImg3 from '../../assets/media/img/canvas-gallery/3.png';
import { useProjectSlider } from '../../assets/scripts/slider-animation';

export interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { src: projectImg1, alt: "Socar Racing Arch" },
  { src: projectImg2, alt: "Park Home Billboard" },
  { src: projectImg3, alt: "Kaltenberg Beer Billboard" }
];

function ProjectsSection(): JSX.Element {
  const {
    currentIndex,
    offset,
    imagesLoaded,
    isTransitioning,
    sliderRef,
    slideRefs,
    extendedSlides,
    goToPrevious,
    goToNext,
    goToSlide,
    dragOffset,
    hasInteracted,
  } = useProjectSlider(slides);

  return (
    <section className="section--fourth">
      <span className="sec--fourth-tittle"><h1>on creative best projects</h1></span>
      <div className="sec--fourth-canvas">
        {/* Подсказка будет отображаться только если пользователь еще не взаимодействовал со слайдером */}
        {!hasInteracted && (
          <div className="swipe-hint">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 2000 2000" style={{ /* enableBackground: 'new 0 0 2000 2000' */ }} xmlSpace="preserve">
              <g>
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                  <path className="st0" id="svg_arrow" d="M9706.6,6.6c-87.9-33.6-793.4-485.9-865.8-555.7c-62-59.4-77.5-93-77.5-183.5c2.6-93,41.4-168,268.8-529.8
                    c147.3-230,294.6-441.9,330.8-470.4c82.7-64.6,258.5-67.2,333.4-5.2c134.4,108.6,144.7,240.4,36.2,431.6l-80.1,137l162.8-36.2
                    c1374.9-317.9,2677.5-840,3845.7-1545.5c527.2-317.9,591.9-333.4,739.2-186.1c98.2,98.2,113.7,199,49.1,325.6
                    c-72.5,139.7-1261.4,814.2-2031.5,1152.8c-666.8,292-1674.7,625.4-2382.9,785.7l-253.3,59.4l108.6,72.4
                    c165.4,108.5,214.5,235.2,152.5,395.4C10001.2-37.4,9812.5,47.9,9706.6,6.6z"/>
                  <path className="st0" id="svg_hand" d="M7388.3-1425.2c-268.8-33.6-532.4-222.3-648.7-465.2c-72.4-147.3-113.7-367-93-485.9
                    c23.3-137,679.7-3574.3,692.6-3626c5.2-25.8,2.6-46.5-5.2-43.9c-10.3,0-131.8,134.4-271.4,294.6
                    c-214.5,250.7-276.5,307.5-421.3,377.3c-390.2,193.8-852.9,56.9-1054.5-312.7c-134.4-248.1-116.3-597,49.1-943.3
                    c178.3-369.6,850.3-1362,1315.5-1938.3c408.3-509.1,1028.6-1101,1250.9-1194c175.8-72.4,367,59.4,367,255.9
                    c0,137-23.3,175.7-199,305c-566,423.9-1359.4,1403.4-2057.2,2537.9c-188.7,305-250.7,449.7-250.7,573.7
                    c0,124.1,20.7,168,108.6,211.9c168,87.9,191.3,69.8,943.3-803.7c271.4-312.7,516.9-591.9,550.5-620.3
                    c38.8-36.2,93-51.7,173.2-51.7c98.2,0,126.6,12.9,191.3,85.3c54.3,62,75,108.6,75,183.5c0,54.3-201.6,1155.3-449.7,2447.5
                    c-261,1351.7-444.5,2380.3-436.8,2419.1c7.7,41.3,54.3,105.9,103.4,149.9c116.3,103.4,276.5,108.6,392.8,12.9
                    c41.4-36.2,82.7-87.9,90.5-111.1c7.8-23.3,155.1-775.3,325.6-1672.2c170.6-894.2,325.6-1659.2,338.6-1698
                    c106-263.6,542.7-175.7,540.1,108.5c0,36.2-64.6,390.2-139.6,785.7c-157.7,811.5-157.7,852.9,7.7,964
                    c144.7,98.2,330.8,62,423.9-77.5c20.7-33.6,103.4-403.2,183.5-821.9c80.1-418.7,160.2-793.4,175.8-834.8
                    c33.6-85.3,160.2-170.6,253.3-170.6c95.6,0,219.7,85.3,258.4,180.9c31,74.9,23.3,144.7-82.7,705.6
                    c-134.4,703-134.4,754.7,28.4,863.2c152.5,103.4,348.9,56.9,429-98.2c38.8-72.4,100.8-364.4,206.8-953.7
                    c54.3-297.2,93.1-377.3,204.2-431.6c118.9-56.9,253.3-28.4,336,72.4c82.7,95.6,85.3,168,15.5,501.4
                    c-77.5,372.2-69.8,465.2,36.2,571.2c149.9,149.9,336,116.3,465.2-90.5c121.4-191.3,395.4-1584.3,511.7-2600
                    c41.3-369.6,41.3-1320.7,0-1522.3c-28.4-134.4-25.8-165.4,15.5-245.5c25.8-56.8,80.1-111.1,137-139.6
                    c80.1-38.8,106-41.4,191.3-12.9c134.4,46.5,186.1,129.2,224.9,356.7c43.9,250.7,41.3,1209.5-2.6,1602.4
                    c-116.5,1049.2-403.3,2519.8-540.3,2775.6c-93.1,173.2-299.8,379.9-457.5,454.9c-106,51.7-170.6,64.6-348.9,64.6
                    c-188.7,0-237.8-10.3-354.1-69.8c-74.9-38.8-137-59.4-137-49.1c0,62-227.4,268.8-382.5,343.7c-152.5,74.9-196.4,85.3-379.9,85.3
                    s-230-10.3-374.7-82.7l-165.4-82.7l-100.8,93c-237.8,214.5-578.9,289.5-858,191.3c-85.3-31-165.4-56.9-178.3-62
                    c-12.9-2.6-72.4,250.7-134.4,566c-59.4,315.3-134.4,625.4-165.4,690C8153.3-1570,7778.5-1376.1,7388.3-1425.2z"/>
                </g>
              </g>
            </svg>
          </div>
        )}
        <div
          className="sec--fourth-slider"
          ref={sliderRef}
          style={{
            transform: `translateX(${offset + dragOffset}px)`,
            opacity: imagesLoaded ? 1 : 0,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {extendedSlides.map((slide, index) => (
            <a href="" key={index} ref={el => { slideRefs.current[index] = el; }}><img src={slide.src} alt={slide.alt} /></a>
          ))}
        </div>
        <div className="sec--fourth-nav">
          <a className="sec--fourth-lb" href="" onClick={goToPrevious}></a>
          {slides.map((slide, slideIndex) => (
            <a key={slideIndex} className={`sec--fourth-b ${currentIndex % slides.length === slideIndex ? 'sec--fourth-active' : ''}`} href="" onClick={(e) => goToSlide(e, slideIndex)}></a>
          ))}
          <a className="sec--fourth-rb" href="" onClick={goToNext}></a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;