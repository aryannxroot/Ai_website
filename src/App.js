import React from 'react'

//components
import{ CTA, Brand, Navbar } from './components';

//containers
import{ Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>     
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
