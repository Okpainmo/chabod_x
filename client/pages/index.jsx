import React from 'react';
import MainAppLayout from '../components/layouts/MainAppLayout';
import MobileNavbar from '../components/layouts/MobileNavbar';
import Navbar from '../components/layouts/Navbar';
import TopScreen from '../components/TopScreen';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Blog from '../components/Blog';

function index() {
  return (
    <>
      <Navbar />
      <MainAppLayout>
        <div className="min-h-screen">
          <TopScreen />
          <AboutMe />
          <Projects />
          <Contacts />
          <Blog />
        </div>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default index;
