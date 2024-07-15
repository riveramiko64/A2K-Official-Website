import React,{useEffect,useState} from "react";
import './key.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

import keyImg from '../../Assets/ANGAD-LOGO.png'
import keyImg2 from '../../Assets/ANGAT-LOGO.png'
import keyImg3 from '../../Assets/KASAMA-LOGO.png'
import donutImg from '../../Assets/donut-chart-services.png'

import keycapImg from '../../Assets/engineering-capabilities.png'
import keycapImg2 from '../../Assets/core-benefits.png'
import keycapImg3 from '../../Assets/applications.png'

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


const ServicesRight = [
  {
    idright: 1,
    servrightImg: img2,
    titleright: 'SOFTWARE DEVELOPMENT',
    descright: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailright: 'software.team@a2kgroup.org'
  },
  {
    idright: 2,
    servrightImg: img3,
    titleright: 'SOFTWARE DEVELOPMENT',
    descright: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailright: 'software.team@a2kgroup.org'
  },
  {
    idright: 3,
    servrightImg: img4,
    titleright: 'SOFTWARE DEVELOPMENT',
    descright: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailright: 'software.team@a2kgroup.org'
  },
  {
    idright: 4,
    servrightImg: img5,
    titleright: 'SOFTWARE DEVELOPMENT',
    descright: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailright: 'software.team@a2kgroup.org'
  },
  {
    idright: 5,
    servrightImg: img6,
    titleright: 'SOFTWARE DEVELOPMENT',
    descright: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailright: 'software.team@a2kgroup.org'
  },

];

const ServicesLeft = [
  {
    idleft: 6,
    servleftImg: img7,
    titleleft: 'SOFTWARE DEVELOPMENT',
    descleft: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailleft: 'software.team@a2kgroup.org'
  },
  {
    idleft: 7,
    servleftImg: img8,
    titleleft: 'SOFTWARE DEVELOPMENT',
    descleft: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailleft: 'software.team@a2kgroup.org'
  },
  {
    idleft: 8,
    servleftImg: img9,
    titleleft: 'SOFTWARE DEVELOPMENT',
    descleft: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailleft: 'software.team@a2kgroup.org'
  },
  {
    idleft: 9,
    servleftImg: img10,
    titleleft: 'SOFTWARE DEVELOPMENT',
    descleft: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailleft: 'software.team@a2kgroup.org'
  },
  {
    idleft: 10,
    servleftImg: img11,
    titleleft: 'SOFTWARE DEVELOPMENT',
    descleft: 'Our software team specializes in crafting digitalization tools designed to streamline processes and enhance platforms within fully digitalized systems. Leveraging the expertise of our international professionals, we integrate world-class techniques to develop top-notch digital tools that transform intricate systems into efficient and capable solutions.',
    emailleft: 'software.team@a2kgroup.org'
  },

];

const KeyServices = () => {

    useEffect(() => {
    Aos.init({duration: 2000})
    }, [])
  
  
  const combinedServices = [];
  const maxLength = Math.max(ServicesLeft.length, ServicesRight.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < ServicesLeft.length) {
      combinedServices.push({ ...ServicesLeft[i], isLeft: true });
    }
    if (i < ServicesRight.length) {
      combinedServices.push({ ...ServicesRight[i], isLeft: false });
    }
  }



  return (
    <section className="keyservices">
      <div className="secContainer">
        <h2 className="title" data-aos="fade-up">
          KEY SERVICES BY DIVISIONS
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem" data-aos="zoom-in-right">
            <img src={keyImg} alt="Image Name" />
            <p>Developing app and hardware solutions for organizations for unmet digitization needs.</p>
          </div>
          <div className="singleItem" data-aos="zoom-in">
            <img src={donutImg} alt="Image Name" />
          </div>
          <div className="singleItem" data-aos="zoom-in-left">
            <img src={keyImg3} alt="Image Name" />
            <p>Funding innovation through competitions and collaborations.</p>
          </div>
          <div className="botItem" data-aos="zoom-in-up">
            <img src={keyImg2} alt="Image Name" />
            <p>Training students and employees of organizations to learn skills to expand digitization though their efforts.</p>
          </div>
        </div>


        <div className="botMainContent">
        <h1 className="title" data-aos="fade-right">KEY ENGINEERING CAPABILITIES</h1>
        <div className="botContent container grid">
          
          <div className="singleItem" data-aos="flip-left">
            <h1>ENGINEERING CAPABILITIES</h1>
            <img src={keycapImg} alt="Image Name" />
          </div>
          <div className="singleItem" data-aos="flip-down">
            <h1>CORE BENEFITS</h1>
            <img src={keycapImg2} alt="Image Name" />
          </div>
          <div className="singleItem" data-aos="flip-right">
            <h1>APPLICATIONS</h1>
            <img src={keycapImg3} alt="Image Name" />
          </div>
          </div>
          
        </div>
        

        <div className="servicesMainContent">
          <h1 className="title" data-aos="fade-up" data-aos-offset="300">TRANSFORMATIVE SERVICES</h1>
          
          {combinedServices.map((item, index) => {
            return item.isLeft ? (
              <div className="servicesContentleft" data-aos="fade-right" key={index}>
                <div className="singleItem" data-aos="fade-right" data-aos-offset="300">
                  <h1>{item.titleleft}</h1>
                  <p>{item.descleft}</p>
                  <a href="#">{item.emailleft}</a>
                </div>
                <div className="singleItem" data-aos="fade-right" data-aos-offset="200">
                  <img src={item.servleftImg} alt={`Services ${item.idleft}`} />
                </div>
              </div>
            ) : (
              <div className="servicesContentright" data-aos="fade-left" key={index}>
                <div className="singleItem" data-aos="fade-left" data-aos-offset="200">
                  <img src={item.servrightImg} alt={`Services ${item.idright}`} />
                </div>
                <div className="singleItem" data-aos="fade-left" data-aos-offset="300">
                  <h1>{item.titleright}</h1>
                  <p>{item.descright}</p>
                  <a href="">{item.emailright}</a>
                </div>
              </div>
            );
          })}
         







        </div>


        
      </div>
    </section>
  )
}

export default KeyServices;
