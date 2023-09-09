import React from 'react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import MainAppLayout from '../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../components/portfolio/layouts/MobileNavbar';
import Navbar from '../components/portfolio/layouts/Navbar';
import TopScreen from '../components/portfolio/TopScreen';
import AboutMe from '../components/portfolio/AboutMe';
import Projects from '../components/portfolio/Projects';
import Courses from '../components/portfolio/Courses';
import Contacts from '../components/portfolio/Contacts';
import Blog from '../components/portfolio/Blog';
// import { PortfolioContext } from '../context/PortfolioContext';

import PortfolioPreloader from '../components/portfolio/PortfolioPreloader';

function Home() {
  return (
    <>
      <Head>
        <title>A.J Okpainmo</title>
      </Head>
      <Toaster />
      <PortfolioPreloader />
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen relative">
          <TopScreen />
          <AboutMe />
          <Courses />
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
