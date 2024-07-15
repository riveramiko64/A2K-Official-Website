import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'
import NewsA2K from './Components/News/News'
import Story from './Components/Story/Story'
import Services from './Components/Services/Services'

const App = () => {
  return (
      <>
          <Navbar />
          <Home />
          <Services />
          <About/>
          <Story />
          <NewsA2K />
          <ContactForm/>
          <Footer />
      
          
      </>
  )
}

export default App