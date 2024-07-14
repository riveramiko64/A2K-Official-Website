import React, { useState, useEffect } from 'react';
import './navbar.css';
import { TbGrain } from 'react-icons/tb';
import a2klogo from '../../Assets/A2K-LOGO.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 980);

  const toggleNav = () => {
    setActive(!active);
  };

  const toggleDropdown = (index) => {
    if (isMobileView) {
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(index);
      }
    }
  };

  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 980);
  };

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', addBg);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <img src={a2klogo} alt="Image Logo" />
            <p className="angad">ANGAD • ANGAT • KASAMA</p>
          </a>
        </div>

        <div className={`navBar ${active ? 'activeNavbar' : ''}`}>
          <ul className="navLists flex">
            <li
              className={`navItem ${openDropdown === 0 ? 'show' : ''}`}
              onClick={() => toggleDropdown(0)}
            >
              <a href="#" className="navLink">About Us <RiArrowDownSFill /></a>
              <ul className="dropdownMenu">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Management Board</a></li>
              </ul>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Services <RiArrowDownSFill /></a>
              <ul className="dropdownMenu">
                <li><a href="#">Learn With Us</a></li>
                <li><a href="#">Key Services</a></li>
              </ul>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Academy</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact <RiArrowDownSFill /></a>
              <ul className="dropdownMenu">
                <li><a href="#">Group's Directory</a></li>
              </ul>
            </li>
            <div className="headerBtns flex">
              <FaFacebook className="iconsoc" />
              <AiFillInstagram className="iconsoc" />
              <BsLinkedin className="iconsoc" />
            </div>
          </ul>
        </div>

        <div onClick={toggleNav} className="toggleNavbar">
          <BsUiRadiosGrid className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
