import React, { useState, useEffect } from 'react';
import navbarCss from './navbarfront.module.css';
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

  const [transparent, setTransparent] = useState(navbarCss.navbarCssheader);
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent(`${navbarCss.header} ${navbarCss.navbarCssactiveHeader}`);
    } else {
      setTransparent(navbarCss.navbarCssheader);
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
    <section className={navbarCss.navbarCssnavBarSection}>
      <div className={transparent}>
        <div className={navbarCss.navbarCsslogoDiv}>
          <a href="#" className={navbarCss.navbarCsslogo}>
            <img src={a2klogo} alt="Image Logo" />
            <p className={navbarCss.navbarCssangad}>ANGAD • ANGAT • KASAMA</p>
          </a>
        </div>

        <div className={`${navbarCss.navbarCssnavBar} ${active ? navbarCss.navbarCssactiveNavbar : ''}`}>
          <ul className={`${navbarCss.navbarCssnavLists} flex`}>
            <li
              className={`${navbarCss.navbarCssnavItem} ${openDropdown === 0 ? navbarCss.navbarCssshow : ''}`}
              onClick={() => toggleDropdown(0)}
            >
              <a href="#" className={navbarCss.navbarCssnavLink}>About Us <RiArrowDownSFill /></a>
              <ul className={navbarCss.navbarCssdropdownMenu}>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Management Board</a></li>
              </ul>
            </li>
            <li className={navbarCss.navbarCssnavItem}>
              <a href="#" className={navbarCss.navbarCssnavLink}>Services <RiArrowDownSFill /></a>
              <ul className={navbarCss.navbarCssdropdownMenu}>
                <li><a href="#">Learn With Us</a></li>
                <li><a href="#">Key Services</a></li>
              </ul>
            </li>
            <li className={navbarCss.navbarCssnavItem}>
              <a href="#" className={navbarCss.navbarCssnavLink}>Academy</a>
            </li>
            <li className={navbarCss.navbarCssnavItem}>
              <a href="#" className={navbarCss.navbarCssnavLink}>News</a>
            </li>
            <li className={navbarCss.navbarCssnavItem}>
              <a href="#" className={navbarCss.navbarCssnavLink}>Contact <RiArrowDownSFill /></a>
              <ul className={navbarCss.navbarCssdropdownMenu}>
                <li><a href="#">Group's Directory</a></li>
              </ul>
            </li>
            <div className={navbarCss.navbarCssheaderBtns}>
              <FaFacebook className={navbarCss.navbarCssiconsoc} />
              <AiFillInstagram className={navbarCss.navbarCssiconsoc} />
              <BsLinkedin className={navbarCss.navbarCssiconsoc} />
            </div>
          </ul>
        </div>

        <div onClick={toggleNav} className={navbarCss.navbarCsstoggleNavbar}>
          <BsUiRadiosGrid className={navbarCss.navbarCssicon} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
