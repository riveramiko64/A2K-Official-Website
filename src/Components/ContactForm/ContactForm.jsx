import React,{useEffect} from "react";
import { MdCall, MdOutlineMail } from "react-icons/md";
import { FaViber, FaWhatsapp, FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import './contactform.css';
import 'aos/dist/aos.css'
import Aos from 'aos'


const ContactForm = () => {

    useEffect(() => {
    Aos.init({duration: 2000})
    },[])
    
  return (
      <div className="contact-form-container">
          

          <div className="contact-form-bg">
              
      <div className="header" data-aos="fade-down">
        <h2>GET IN TOUCH</h2>
          </div> 
      <div className="main-content">
        <div className="contact-form-section" data-aos="fade-up-right">
          <h2>Contact Us</h2>
          <form>
            <label>
              Full Name
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="Email" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Message"></textarea>
            </label>
                      <button type="submit">Send Message</button>
                      <p></p>
          </form>
        </div>
        <div className="map-section" data-aos="fade-down-left">
                  <iframe
                      className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.648864469113!2d120.65401127495751!3d15.01218478552445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f72ecc202bdd%3A0x9f2f2aa3f732ced0!2sA2K%20Group!5e0!3m2!1sen!2sph!4v1720974927709!5m2!1sen!2sph"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
          </div>
          
        </div>

      <div className="info-section">
        <div className="info" data-aos="zoom-in-right">
          <i className="icon">
            <MdCall className="icon" />
          </i>
          <p className="title">HOTLINE</p>
          <p>045-4050-296</p>
        </div>
        <div className="info" data-aos="zoom-in">
          <i className="icon">
            <FaViber className="icon" />
          </i>
          <p className="title">VIBER</p>
          <p>+63 927 881 2450</p>
        </div>
        <div className="info" data-aos="zoom-in-left">
          <i className="icon">
            <FaWhatsapp className="icon" />
          </i>
          <p className="title">WHATSAPP</p>
          <p>+63 927 881 2450</p>
        </div>
        <div className="info" data-aos="zoom-in-up">
          <i className="icon">
            <MdOutlineMail className="icon" />
          </i>
          <p className="title">EMAIL US</p>
          <p>info@a2kgroup.org</p>
        </div>
        <div className="info" data-aos="zoom-in-down">
          <i className="icon">
            <FaRegClock className="icon" />
          </i>
          <p className="title">BUSINESS HOURS</p>
          <p>Mon-Fri: 8AM-5PM</p>
        </div>
        <div className="info" data-aos="zoom-in-up">
          <i className="icon">
            <SlLocationPin className="icon" />
          </i>
          <p className="title">LOCATION</p>
          <p>Jose Abad Santos Ave. Brgy, Cabalantian Bacolor, Pampanga</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
