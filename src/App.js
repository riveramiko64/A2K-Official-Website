import React from 'react'
import './app.css'


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
import GroupDirect from './Components/DirectoryGroup/GroupDirect'
import Homes from './Components/Home/Homefront'
const App = () => {
  return (
    <>

     
      <NewsA2K />
      <Services />
        <Story />
      
      
      <About/>
       
      
      {/*
    
                     
         
       <ContactForm/>         
         <GroupDirect />
          <Footer />
      <Homes />
      <KeyServices/>
      
         */}
      
      
          
      </>
  )
}

export default App