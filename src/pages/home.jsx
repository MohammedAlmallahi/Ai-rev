import React from 'react'
import Navbar from '../components/Navbar';
import HeroSwctions from '../components/heroSections';
import AiTypes from '../components/AiTypes';
import AiBenefits from '../components/AiBenefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSwctions />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
