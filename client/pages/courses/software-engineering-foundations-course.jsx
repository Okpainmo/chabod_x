import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import MainAppLayout from '../../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../../components/portfolio/layouts/MobileNavbar';
import Navbar from '../../components/portfolio/layouts/Navbar';
import courseFlier from '../../assets/images/software-engineering-foundations-course-roadmap-flier-global-whatsapp.png';

function CourseParent() {
  return (
    <>
      <Head>
        <title>The Software Engineering Foundations Course(Front-end web development).</title>
      </Head>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen pt-12 sm:pt-20 mb-20 text-[12px] sm:text-[14px]">
          <div className="w-full">
            <Image className="mx-auto" alt="mentorship flier" src={courseFlier} width="100%" />
          </div>
          <section className="px-3 w-full sm:mt-20 sm:px-12 md:px-0 md:w-[70%] md:mx-auto lg:w-[60%] xl:w-[50%]">
            <h1 className="capitalize mt-6 mb-4 underline poppins font-bold text-2xl sm:text-3xl">
              Software Engineering Foundations Course.
            </h1>
            <p className="text-16px font-bold montserrat mb-4">
              The ultimate course to help you begin you software engineering career as a web
              developer - a course built for absolute beginners.
            </p>
            <div className="pt-4">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">1. About.</h3>
              <div>
                After creating an awesome amount of free content on{' '}
                <a
                  href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                  className="font-bold underline text-purple-800"
                >
                  my Youtube channel
                </a>{' '}
                , I decided to put much quality and effort into creating this course for new
                entrants to the world of software engineering.
                <br />
                <br />
                The course is a course built to make beginners into world-class market-ready junior
                developers. The course's core focus is foundational front-end web development, but
                it's built with a mission to give course learners a great foundation as software
                engineers(beyond just front-end web development). The course release date is 10th
                December 2023, but it's{' '}
                <a href="https://selar.co/6f9q55" className="font-bold underline text-purple-800">
                  currently open for pre-order.
                </a>{' '}
                <br /> <br />
                The course is a well structured course to be completely handled by me(Andrew James
                Okpainmo).
                <br />
                <br />
                <p className="font-bold">
                  This course is my first premium video-content course. The course when released
                  will be a <span className="underline poppins">15 - 25 hour</span> video content to
                  be sold on Udemy and other course selling platforms.
                </p>
                <br />
                <span className="font-bold poppins">
                  N.B: The course is currently up for pre-order at only $5(Five US Dollars). But
                  will cost $15(Fifteen US Dollars) after pre-order sales are closed.
                </span>
                <br />
                <br />
                <span className="font-bold underline poppins">
                  Please take note that I'm giving out only 200 sales for pre-order.
                  <br />
                  <br />
                  Believe me, this is some marketing trick. Once pre-order sales hit 200, It'll be
                  closed and users can only purchase after the final course release on December 10th
                  at $15(Except if you're lucky to get a discount).
                </span>
                <br />
                <br />
                Hurry and pre-order now.
                <br />
                <br />
                Cheers!!!
              </div>
            </div>

            <div className="pre-order-link mx-auto mt-10 flex justify-center">
              <a href="https://selar.co/6f9q55" target="_blank" rel="noreferrer">
                <div className="btn--regular px-[15px] py-[15px] poppins font-bold w-[200px] text-white text-center">
                  Pre-order Now
                </div>
              </a>
            </div>
          </section>
        </main>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default CourseParent;
