import React from 'react'
import './app.css'

import Home from './Components/Home/Homefront'
import About from './Components/About/Aboutfront'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'
import NewsA2K from './Components/News/News'
import Story from './Components/Story/Story'
import Services from './Components/Services/Services'
import KeyServices from './Components/KeyServices/KeyServices'
import Learn from './Components/LearnWIthUs/Learn'
import OurStory from './Components/OurStory/OurStory'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
      
         
          <Navbar/>
         <ContactForm/>         
        <Home/>
          
      

      {/*<OurStory/>
      <Learn/>
      <KeyServices/>
      <Home  />
      <About/>
       <Navbar />
      <Story />
          <NewsA2K />
          
          <Footer />*/}
      
      
          
      </>
  )
}

export default App