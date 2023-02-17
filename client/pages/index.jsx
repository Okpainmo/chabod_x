import React from 'react';
import MainAppLayout from '../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../components/portfolio/layouts/MobileNavbar';
import Navbar from '../components/portfolio/layouts/Navbar';
import TopScreen from '../components/portfolio/TopScreen';
import AboutMe from '../components/portfolio/AboutMe';
import Projects from '../components/portfolio/Projects';
import Contacts from '../components/portfolio/Contacts';
import Blog from '../components/portfolio/Blog';

function index() {
  return (
    <>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen">
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

export default index;
