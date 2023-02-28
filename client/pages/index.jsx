import React from 'react';
import { Toaster } from 'react-hot-toast';
import MainAppLayout from '../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../components/portfolio/layouts/MobileNavbar';
import Navbar from '../components/portfolio/layouts/Navbar';
import TopScreen from '../components/portfolio/TopScreen';
import AboutMe from '../components/portfolio/AboutMe';
import Projects from '../components/portfolio/Projects';
import Contacts from '../components/portfolio/Contacts';
import Blog from '../components/portfolio/Blog';
// import { PortfolioContext } from '../context/PortfolioContext';

import Preloader from '../components/portfolio/layouts/Preloader';

function Home() {
  return (
    <>
      <Toaster />
      <Preloader />
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen relative">
          <TopScreen />
          <AboutMe />
          <Projects />
          <Contacts />
          <Blog />
        </main>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default Home;
