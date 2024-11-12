import React from 'react'
import Exclusive from './component/exclusive'
import './App.css'
import OurStory from './component/OurStory'
import Header from './component/Header'
import Sea from './component/Sea'
import Footer from './component/Footer'
import Flavor from './component/Flavor'


function App() {

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <OurStory />
      <Flavor />
      <Sea />
      <Exclusive />
      <Footer />
    </>
  )
}

export default App
