import React, { useState, useEffect, useRef } from 'react';
import servicesfront from './servicesfront.module.css';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images (use your own image paths)
import img2 from '../../Assets/2.jpg';
import img3 from '../../Assets/3.jpg';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';

const Data = [
  { id: 1, imgSrc: img2, h6title: 'Hardware Development', links: '' },
  { id: 2, imgSrc: img3, h6title: 'Data Modelling & Analysis', links: '' },
  { id: 3, imgSrc: img4, h6title: 'Information Systems', links: '' },
  { id: 4, imgSrc: img5, h6title: 'Internship & Mentorship', links: '' },
  { id: 5, imgSrc: img6, h6title: 'Training', links: '' },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleSlides = 4;
  const carouselRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth / numVisibleSlides;
      const scrollAmount = currentIndex * itemWidth;
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < numVisibleSlides; i++) {
      slides.push(Data[(currentIndex + i) % Data.length]);
    }
    return slides;
  };

  return (
    <section className={`${servicesfront.popular} ${servicesfront.section} ${servicesfront.container}`}>
      <div className={servicesfront.secContainer}>
        <div className={`${servicesfront.secHeader} ${servicesfront.flex}`}>
          <div className={servicesfront.textDiv}>
            <h2 data-aos="fade-right" className={servicesfront.secTitle}>
              <span className={servicesfront.a2k}>A2K GROUP </span>TRANSFORMATIVE SERVICES
            </h2>
            <p data-aos="fade-right">
              Transforming Services through Digitalization
            </p>
          </div>
        </div>

        <div className={servicesfront.mainContent} data-aos="zoom-out-down" data-aos-duration="3000">
          <RiArrowLeftWideFill className={`${servicesfront.icon} ${servicesfront.leftIcon}`} onClick={handlePrevClick} />
          <div className={servicesfront.carousel} ref={carouselRef}>
            {getVisibleSlides().map((item) => (
              <div key={item.id} className={servicesfront.transfServices}>
                <a href="#">
                  <div className={servicesfront.servicesImage}>
                    <img src={item.imgSrc} alt={item.h6title} />
                  </div>
                </a>
                <div className={servicesfront.servicesFooter}>
                  <div className={`${servicesfront.servicesText} ${servicesfront.flex}`}>
                    <h6>{item.h6title}</h6>
                    <span className={servicesfront.flex}>
                      <BsDot className={`${servicesfront.icon} ${servicesfront.dot}`} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <RiArrowRightWideFill className={servicesfront.icon} onClick={handleNextClick} />
        </div>
      </div>
    </section>
  );
};

export default Services;
