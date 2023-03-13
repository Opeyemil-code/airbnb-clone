import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import Header from './header'
import Section from './section.jsx'
import Headings from './headline.jsx'
import Carousel from './component/carousel/carousel'
function Container(params) {
  return(
    <div>
   <Header/>
   <Section/>
   <Headings/>
   <Carousel/>
    </div>
  )
}

export default Container

