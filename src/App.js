import React from 'react'
import './app.css'

import Home from './Components/Home/Homefront'
import About from './Components/About/Aboutfront'
import Footer from './Components/Footer/Footerfront'
import ContactForm from './Components/ContactForm/ContactForm'
import NewsA2K from './Components/News/Newsfront'
import Story from './Components/Story/Story'
import Services from './Components/Services/Servicesfront'
import KeyServices from './Components/KeyServices/KeyServices'
import Learn from './Components/LearnWIthUs/Learn'
import OurStory from './Components/OurStory/OurStory'
import Navbar from './Components/Navbar/Navbarfront'

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <NewsA2K />
      <Services />
        <Story />
      <KeyServices/>
      <Home  />
      <About/>
       <Navbar />        
         <ContactForm/>         
        
          <Footer />
      

      {/*
    
           
      
         */}
      
      
          
      </>
  )
}

export default App