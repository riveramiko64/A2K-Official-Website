import React, { useEffect, useState } from 'react';
import './home.css';
import bgImage1 from '../../Assets/bg-image.jpg'; // Assume bgImage1 is your uploaded image
import bgImage2 from '../../Assets/2.jpg'; // Using the same image for demonstration
import bgImage3 from '../../Assets/3.jpg'; // Using the same image for demonstration

import 'aos/dist/aos.css'
import Aos from 'aos'


const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])



  const images = [bgImage1, bgImage2, bgImage3];
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(0);
    }, 5000); // Change image every 4 seconds

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 50); // Update progress bar every 40ms (4s/100 = 40ms)

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length]);

  return (
    <section className="home">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carouselImage ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="carouselIndicator">
        <div className="progressBar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">
            <span className='title titlespan'>SHAPING YOUR FUTURE WITH</span> A2K GROUP
          </h1>
          <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="subTitle">
            Our international team of mentors and experts stands ready to collaborate with you in crafting tailored digital solutions that cater to your unique needs. Together we can unlock the potential of digitalization, extending its benefits to your people, processes, and platforms.
          </p>
          <button data-aos="zoom-out" className='btn'>
            <a href="#">SEE WHAT TO DO</a>
          </button>
          <button data-aos="zoom-in" className='btn'>
            <a href="#">LEARN WITH US</a>
          </button>
          <button data-aos="zoom-out" className='btn'>
            <a href="#">WORK WITH US</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
