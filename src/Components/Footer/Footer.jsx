import React from 'react';
import './footer.css';
import logoa2k from '../../Assets/A2K-LOGO.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
              <img src={logoa2k} alt="A2K Logo" />
              <p className="angad">ANGAD • ANGAT • KASAMA</p>
            </a>
            <p className="slogan">Transforming Services through Digitalization</p>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick links</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>

        <div className="footerSocial">
          <span className="linkTitle">Social Media</span>
          <div className="socials flex">
            <FaFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <BsLinkedin className="icon" />
          </div>
        </div>

        <div className="footerSubscription">
          <span className="linkTitle">E-mail Subscription</span>
          <p>Get the latest updates on tech products, courses, </p>
          <p className='bot'>workshops, internship opportunities and services.</p>
          <button className="subscribeButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
