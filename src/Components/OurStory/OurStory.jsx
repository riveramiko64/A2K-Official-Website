import React, { useEffect } from "react";
import ourstory from './ourstory.module.css';
import img2 from '../../Assets/2.jpg';
import { FaRegLightbulb } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import 'aos/dist/aos.css';
import Aos from 'aos';

const OurStory = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className={ourstory.ourStory}>
            <div className={ourstory.secContainer}>
                <div className={ourstory.ourStoryMainContent}>
                    <h1 className={ourstory.title} data-aos="fade-up" data-aos-offset="300">
                        <span className={ourstory.subtitle}>A2K GROUP</span> HISTORY
                    </h1>

                    <div className={ourstory.storyContent} data-aos="fade-right">
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1>WHO WE ARE</h1>
                            <p>At A2K Group we champion the cause of digitalization in the Philippines and around the world to usher in a new era of technological advancement...</p>
                        </div>
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="200">
                            <img src={img2} alt="Our Story Image" />
                        </div>
                    </div>

                    <div className={ourstory.visionContent} data-aos="fade-right">
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><FaRegLightbulb />OUR <span className={ourstory.subtitle}>VISION</span></h1>
                            <p>To empower others through the transition towards digitalization...</p>
                        </div>
                        <div className={ourstory.singleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><SiDart /> OUR <span className={ourstory.subtitle}>MISSION</span></h1>
                            <p>We deliver digitalization services to organizations...</p>
                        </div>
                        <div className={ourstory.lastItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><FaBalanceScale /> OUR <span className={ourstory.subtitle}>CORE VALUES</span></h1>
                            <h3>Family</h3>
                            <p>Fostering a caring community...</p>
                            <h3>Innovation</h3>
                            <p>Professionally pursuing excellence...</p>
                            <h3>Joy</h3>
                            <p>Living each day as an opportunity to celebrate...</p>
                        </div>
                    </div>

                    <div className={ourstory.historyContent} data-aos="fade-right">
                        <h1 className={ourstory.hisTitle}>
                            <span className={ourstory.title}>PAST </span> | <span className={ourstory.title}> PRESENT</span> | <span className={ourstory.title}> FUTURE</span>
                        </h1>

                        <div className={ourstory.firstItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><CiMapPin className={ourstory.icons} /> THE BEGINNING OF <span className={ourstory.subtitle}>A2K GROUP</span></h1>
                            <p>A2K Group was founded with the ideals of ANGAT, ANGAD, and KASAMA...</p>
                        </div>
                        <div className={ourstory.middleItem} data-aos="fade-right" data-aos-offset="300">
                            <h1><CiMapPin className={ourstory.icons} /> TODAY</h1>
                            <p>We are a skilled global team of technical experts...</p>
                        </div>
                        <div className={ourstory.lastItem} >
                            <h1><CiMapPin className={ourstory.icons} /> LOOKING AHEAD</h1>
                            <p>A2K Group is continuously broadening its reach...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
