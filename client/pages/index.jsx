import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import MainAppLayout from '../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../components/portfolio/layouts/MobileNavbar';
import Navbar from '../components/portfolio/layouts/Navbar';
import TopScreen from '../components/portfolio/TopScreen';
import AboutMe from '../components/portfolio/AboutMe';
import Projects from '../components/portfolio/Projects';
import Contacts from '../components/portfolio/Contacts';
import Blog from '../components/portfolio/Blog';

import Preloader from '../components/portfolio/layouts/Preloader';

function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showResponsePreloader, setShowResponsePreLoader] = useState(false);

  const ResponsePreloaderShow = () => {
    setShowResponsePreLoader(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ResponsePreloaderShow();

    const { name, email, message } = form;

    try {
      // using axios for post request
      // pass name as form input value in the axios post method

      console.log({ name, email, message });
      const postRequest = await axios.post(
        'https://chabod-x.onrender.com/api/v1/messages/send-message',
        {
          name,
          email,
          message
        }
      );

      // if (postRequest) {
      // }

      console.log(postRequest);

      if (postRequest.status === 201 && postRequest.data.requestStatus === 'success') {
        setShowResponsePreLoader(false);
        toast.success(
          'Thanks a lot for contacting me, your message has been recieved. I will send a reply ASAP',
          {
            duration: 10000
          }
        );
      }

      if (postRequest.status !== 201 && postRequest.data.requestStatus !== 'success') {
        setShowResponsePreLoader(false);
        toast.error('Ooops, it seems something went wrong. Please try sending your message again', {
          duration: 10000
        });
      }
    } catch (error) {
      setShowResponsePreLoader(false);
      console.log(error);
      toast.error('Ooops, it seems something went wrong. Please try sending your message again', {
        duration: 10000
      });
    }
  };

  return (
    <>
      <Toaster />
      <Preloader showResponsePreloader={showResponsePreloader} />
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen relative">
          <TopScreen />
          <AboutMe />
          <Projects />
          <Contacts form={form} setForm={setForm} handleSubmit={handleSubmit} />
          <Blog />
        </main>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default Home;
