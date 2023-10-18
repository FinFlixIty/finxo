import React from 'react'
import Hero from '../Component/hero';
import Cards from '../Component/Cards';
import Footer from '../Component/footer';
import Newsletter from '../Component/Newsletter';
import { Link, animateScroll as scroll } from "react-scroll";
const Main = () => {
  return (
    <div>
        <Hero />
        <Cards />
        <Newsletter/>
        <Footer />
    </div>
  )
}

export default Main
