import React, { useState, useEffect, useRef } from 'react';
import './popular.css';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import 'aos/dist/aos.css'
import Aos from 'aos'

// Import images (use your own image paths)
import img2 from '../../Assets/2.jpg';
import img3 from '../../Assets/3.jpg';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';
import img7 from '../../Assets/7.jpg';
import img8 from '../../Assets/8.jpg';
import img9 from '../../Assets/9.jpg';
import img10 from '../../Assets/10.jpg';
import img11 from '../../Assets/11.jpg';

const Data = [
  { id: 1, imgSrc: img2, h6title: 'Software Development', links: '' },
  { id: 2, imgSrc: img3, h6title: 'Software Development', links: '' },
  { id: 3, imgSrc: img4, h6title: 'Software Development', links: '' },
  { id: 4, imgSrc: img5, h6title: 'Hardware Development', links: '' },
  { id: 5, imgSrc: img6, h6title: 'Hardware Development', links: '' },
  { id: 6, imgSrc: img7, h6title: 'Networking', links: '' },
  { id: 7, imgSrc: img8, h6title: 'Networking', links: '' },
  { id: 8, imgSrc: img9, h6title: 'Cybersecurity', links: '' },
  { id: 9, imgSrc: img10, h6title: 'Cybersecurity', links: '' },
  { id: 10, imgSrc: img11, h6title: 'AI & ML', links: '' },
];

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleSlides = 5;
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
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 data-aos="fade-right" className="secTitle">
              <span className='secTitle a2k'>A2K GROUP </span>TRANSFORMATIVE SERVICES
            </h2>
            <p data-aos="fade-right">
              Transforming Services through Digitalization
            </p>
          </div>
        </div>

        <div className="mainContent" data-aos="zoom-out-down" data-aos-duration="3000" >
          <RiArrowLeftWideFill className='icon leftIcon' onClick={handlePrevClick} />
          <div className="carousel" ref={carouselRef}>
            {getVisibleSlides().map((item, index) => (
              <div
                key={item.id}
                className="transfServices">
                
                <a href="#">

                <div className="servicesImage">
                  <img src={item.imgSrc} alt={`Service ${item.id}`} />
                  {/*<div className="overlayInfo">
                    <h3>Some Text</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <FaRegStar className='icon' />
                  </div>*/}
                  </div>

                </a>
                


                <div className="servicesFooter">
                  <div className="servicesText flex">
                    <h6>{item.h6title}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className='icon' />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <RiArrowRightWideFill className='icon' onClick={handleNextClick} />
        </div>
      </div>
    </section>
  );
};

export default Popular;
