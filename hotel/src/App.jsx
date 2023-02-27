import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './component/header'
import Section from './component/section'
import Headings from './component/headline'
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

