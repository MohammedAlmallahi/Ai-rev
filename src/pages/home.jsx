import React from 'react'
import Navbar from '../components/navbar';
import HeroSwctions from '../components/heroSwctions';
import AiTypes from '../components/aiTypes';
import AiBenefits from '../components/aiBenefits';
import Footer from '../components/footer';
import Contact from '../components/contact';

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
