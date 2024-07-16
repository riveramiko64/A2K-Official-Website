import React, { useEffect, useState } from 'react';
import homeCss from './homefront.module.css';
import bgImage1 from '../../Assets/bg-image.jpg';
import bgImage2 from '../../Assets/2.jpg';
import bgImage3 from '../../Assets/3.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Homes = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const images = [bgImage1, bgImage2, bgImage3];
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length]);

  return (
    <section className={homeCss.home}>
      <div className={homeCss.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${homeCss.carouselImage} ${index === currentImage ? homeCss.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className={homeCss.carouselIndicator}>
        <div className={homeCss.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={homeCss.secContainer}>
        <div className={homeCss.homeText}>
          <h1 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className={homeCss.title}>
            <span className={homeCss.titlespan}>SHAPING YOUR FUTURE WITH</span> A2K GROUP
          </h1>
          <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className={homeCss.subTitle}>
            Our international team of mentors and experts stands ready to collaborate with you in crafting tailored digital solutions that cater to your unique needs. Together we can unlock the potential of digitalization, extending its benefits to your people, processes, and platforms.
          </p>
          <button data-aos="zoom-out" className={homeCss.btns}>
            <a href="#">SEE WHAT TO DO</a>
          </button>
          <button data-aos="zoom-in" className={homeCss.btns}>
            <a href="#">LEARN WITH US</a>
          </button>
          <button data-aos="zoom-out" className={homeCss.btns}>
            <a href="#">WORK WITH US</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homes;
