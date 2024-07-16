import React, { useState, useEffect } from 'react';
import navBarcss from './navbarfront.module.css';
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
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const [transparent, setTransparent] = useState(navBarcss.header);
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent(`${navBarcss.header} ${navBarcss.activeHeader}`);
    } else {
      setTransparent(navBarcss.header);
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
    <section className={navBarcss.navBarSection}>
      <div className={transparent}>
        <div className={navBarcss.logoDiv}>
          <a href="#" className={navBarcss.logo}>
            <img className={navBarcss.logo} src={a2klogo} alt="Image Logo" />
            <p className={navBarcss.angad}>ANGAD • ANGAT • KASAMA</p>
          </a>
        </div>

        <div className={`${navBarcss.navBar} ${active ? navBarcss.activeNavbar : ''}`}>
          <ul className={`${navBarcss.navLists} ${navBarcss.flex}`}>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 0 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(0)}
            >
              <a href="#" className={navBarcss.navLink}>About Us <RiArrowDownSFill /></a>
              <ul className={navBarcss.dropdownMenu}>
                <li ><a href="#">Our Story</a></li>
                <li><a href="#">Management Board</a></li>
              </ul>
            </li>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 1 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(1)}
            >
              <a href="#" className={navBarcss.navLink}>Services <RiArrowDownSFill /></a>
              <ul className={navBarcss.dropdownMenu}>
                <li><a href="#">Learn With Us</a></li>
                <li><a href="#">Key Services</a></li>
              </ul>
            </li>
            <li className={navBarcss.navItem}>
              <a href="#" className={navBarcss.navLink}>Academy</a>
            </li>
            <li className={navBarcss.navItem}>
              <a href="#" className={navBarcss.navLink}>News</a>
            </li>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 2 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(2)}
            >
              <a href="#" className={navBarcss.navLink}>Contact <RiArrowDownSFill /></a>
              <ul className={navBarcss.dropdownMenu}>
                <li><a href="#">Group's Directory</a></li>
              </ul>
            </li>
            <div className={`${navBarcss.headerBtns} ${navBarcss.flex}`}>
              <FaFacebook className={navBarcss.iconsoc} />
              <AiFillInstagram className={navBarcss.iconsoc} />
              <BsLinkedin className={navBarcss.iconsoc} />
            </div>
          </ul>
        </div>

        <div onClick={toggleNav} className={navBarcss.toggleNavbar}>
          <BsUiRadiosGrid className={navBarcss.icon} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
  