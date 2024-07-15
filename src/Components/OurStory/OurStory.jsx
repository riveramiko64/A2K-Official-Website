import React, { useEffect, useState } from "react";
import './ourstory.css'
import img2 from '../../Assets/2.jpg';
import { FaRegLightbulb } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";




const OurStory = () => {
  return (
    <section className="ourStory">
      <div className="secContainer">       

        <div className="ourStoryMainContent">
          <h1 className="title" data-aos="fade-up" data-aos-offset="300"><span className="subtitle">A2K GROUP</span> HISTORY</h1>
          
        
              <div className="storyContent" data-aos="fade-right">
                <div className="singleItem" data-aos="fade-right" data-aos-offset="300">
                  <h1>WHO WE ARE</h1>
                  <p>At A2K Group we champion the cause of digitalization in the Philippines and around the world to usher in a new era of technological advancement. We specialize in developing digital services and processes, providing comprehensive training to both students and leaders with complementary skillsets, and investing in promising individuals and innovative ideas to reshape the digital landscape. Our services are guided by a company culture rooted in the recognition that we are part of both a local and global community, working towards a brighter tomorrow for society as a whole. Aligned with this mission, we strive to empower individuals and organizations, enabling them to leverage digital tools for operational optimization and the creation of more efficient systems that benefit their communities. Together, across all three divisions of A2K Group, we collaboratively craft transformative services with holistic solutions to propel the digital evolution forward.​</p>
                  
                </div>
                <div className="singleItem" data-aos="fade-right" data-aos-offset="200">
                  <img src={img2} alt="Our Story Image"/>
                </div>
                  </div>
                  


                <div className="visionContent" data-aos="fade-right">
                <div className="singleItem" data-aos="fade-right" data-aos-offset="300">
                  <h1><FaRegLightbulb />OUR <span className="subtitle">VISION</span></h1>
                  <p>To empower others through the transition towards digitalization with accessible solutions so they can optimize their processes to serve pressing social and commercial needs.​​</p>
                  
                </div>
                <div className="singleItem" data-aos="fade-right" data-aos-offset="300">
                  <h1><SiDart /> OUR <span className="subtitle">MISSION</span></h1>
                  <p>We deliver digitalization services to organizations by providing software and hardware solutions, training in creating digital tools, and investing in future digitalization ventures​.​</p>
                  
                      </div>
                      
                <div className="lastItem" data-aos="fade-right" data-aos-offset="300">
                          <h1><FaBalanceScale /> OUR <span className="subtitle">CORE VALUES</span></h1>
                          <h3>Family</h3>
                          <p>Fostering a caring community with mutual respect, empathy, and positivity.</p>
                          <h3>Innovation</h3>
                          <p>Professionally pursuing excellence and resilience through continuous learning and growth.</p>
                          <h3>Joy</h3>
                          <p>Living each day as an opportunity to celebrate our people, our work, and our purpose.</p>                 
                </div>
                  </div>
                  



                    
                  <div className="historyContent" data-aos="fade-right">
                      <h1 className="hisTitle"> <span className="title">PAST </span> | <span className="title"> PRESENT</span> | <span className="title"> FUTURE</span> </h1>


                <div className="firstItem" data-aos="fade-right" data-aos-offset="300">
                  <h1><CiMapPin className="icons" /> THE BEGINNING OF <span className="subtitle">A2K GROUP</span></h1>
                  <p>A2K Group was founded with the ideals of ANGAT, ANGAD, and KASAMA that guide us as we harness digitalization to transform processes and services towards optimal operation. While we are a global team, we have strong roots in the Philippines where we launched in tandem with a vivid cultural agenda to bring digitalization to all segments of society. Through global and local digital leaders, we saw an opportunity to empower a vibrant workforce with technological processes while addressing pressing social and commercial needs. To do so holistically, we established A2K group with its three divisions to implement the ideals of ANGAT, ANGAD, KASAMA.​​​</p>
                  
                </div>
                <div className="middleItem" data-aos="fade-right" data-aos-offset="300">
                  <h1><CiMapPin className="icons" /> TODAY</h1>
                  <p>We are a skilled global team of technical experts working on diverse projects and delivering world-class digitalization services that empower organizations to transition to efficient and modern systems. As digital pioneers, our focus extends beyond project execution to training both current leaders and emerging digitalization experts in the latest skills with the goal of amplifying their opportunities to further drive and foster digital transformation. Collaborating closely with organizations, we unlock their full potential by providing cutting-edge digital tools, fostering a technically skilled workforce, and strategically investing in opportunities to bring impactful projects to fruition.​​</p>
                  
                      </div>
                      
                <div className="lastItem" data-aos="fade-right" data-aos-offset="300">
                          <h1><CiMapPin className="icons" /> LOOKING AHEAD</h1>
                          <p>A2K Group is continuously broadening its reach through global partnerships, leveraging our expertise in digitalization to elevate the endeavors of our clients. Simultaneously, we are committed to training even more aspiring digital pioneers to sustain the growth of digitalization while investing in innovative ideas where the benefits of digital transformation can have the most impactful outcomes in our communities and around the world.​</p>               
                </div>
              </div>
        

        </div>


        
      </div>
    </section>
  )
}

export default OurStory