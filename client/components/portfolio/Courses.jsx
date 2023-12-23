import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nextJsSeriesBanner from '../../assets/images/nextjs-13-series-thumbnail.png';
import dpprBanner from '../../assets/images/developer-profiles-project-thumbnail.png';
import sefcBanner from '../../assets/images/software-engineering-foundations-course-roadmap-flier-global-whatsapp.png';

function Courses() {
  return (
    <section
      className="courses text-center mt-[50px] lg:mt-[200px] pt-[100px] px-3 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-full lg:px-8"
      id="courses-section"
    >
      <h1 className="text-2xl sm:text-4xl section-title poppins font-bold">Tutorials/Courses</h1>
      <h3 className="text-base sm:text-xl text--colors_secondary my-4 sm:my-6 lg:mb-12 poppins">
        A selection of some of my tutorials/courses.
      </h3>
      <div className="flex flex-col gap-y-12 lg:gap-y-20 mb-16">
        <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
          <div className="project-banner-wrapper lg:w-[45%]">
            <Image
              className="w-full shadow-lg"
              src={sefcBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              Software Engineering Foundations Course(Front-end Web Development).
            </div>
            <div className="project-brief mb-3">
              This course is my first premium course. It's a course built to make (software
              engineering) beginners into world-class market-ready junior software engineers. The
              course's core focus is foundational front-end web development, but it's built with a
              mission to give course learners a solid foundation as software engineers(beyond just
              front-end web development). <br />
              <br />
              The course release month is January 2023, but it's currently open for pre-order.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="hidden tags flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NextJs/ReactJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                TailwindCSS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React context API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Firebase + FirestoreDB
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Solidity
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Hardhat/EthersJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Mumbai(polygon) testnet.
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Alchemy
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Fake store API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Metamask
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem] hidden"
                href="https://github.com/Okpainmo/Master-NextJs13"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="live-site-link bg--secondary rounded-full w-[40px] h-[40px] p-[0.6rem] hidden"
                href="https://www.youtube.com/playlist?list=PLELl52UgYR5FfH9zY0Lzknm6B4s1ILzcV"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
              </a>
              <a href="https://selar.co/6f9q55" target="_blank" rel="noreferrer">
                <div className="btn--regular px-[15px] py-[15px] poppins font-bold w-[200px] text-white text-center">
                  Pre-order Now
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
          <div className="project-banner-wrapper lg:w-[45%]">
            <Image
              className="w-full shadow-lg"
              src={dpprBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              Developer Profiles MERN Stack Tutorial Series.
            </div>
            <div className="project-brief mb-3">
              This project, is a tutorial series that I created to teach the MERN stack in a
              progressive and holistic manner. It is a series that is meant to help full stack
              developers become solidified and vast. <br /> <br /> The series is currently more than
              15 hours of video content. Only the last video in the series remains to be published.
              The project curriculum consist of a single NodeJs/Express back-end, and three
              front-end built with different stacks to teach the progression of front-end
              development technologies from the vanilla phase(HTML and Vanilla Javascript), to
              ReactJs, and the to NextJs 13. All three front-end were styled with TailwindCSS. You
              can learn more about the series on{' '}
              <a
                href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                target="_blank"
                rel="noreferrer"
                className="text--colors_primary underline"
              >
                my youtube channel
              </a>{' '}
              . Don't forget to subscribe, and opt-in for notifications 😊.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="tags hidden flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NextJs/ReactJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                TailwindCSS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React contect API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Firebase + FirestoreDB
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Solidity
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Hardhat/EthersJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Mumbai(polygon) testnet.
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Alchemy
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Fake store API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Metamask
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                href="https://github.com/Okpainmo/developer-profiles-project_youtube-live"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="live-site-link bg--secondary rounded-full w-[40px] h-[40px] p-[0.6rem]"
                href="https://www.youtube.com/playlist?list=PLELl52UgYR5H-wBGiSHa5runPgBSCvzYq"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
          <div className="project-banner-wrapper lg:w-[45%]">
            <Image
              className="w-full shadow-lg"
              src={nextJsSeriesBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              NextJs 13 Tutorial Series
            </div>
            <div className="project-brief mb-3">
              This project, is a tutorial series that I created to teach NextJS 13(the latest
              version of NextJs) and help developers adopt it with less difficulty. The series is
              currently in progress. You can learn more about it on{' '}
              <a
                href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                target="_blank"
                rel="noreferrer"
                className="text--colors_primary underline"
              >
                my youtube channel
              </a>{' '}
              . Do remember to subscribe, and opt-in for notifications 😊.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="hidden tags flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NextJs/ReactJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                TailwindCSS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React contect API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Firebase + FirestoreDB
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Solidity
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Hardhat/EthersJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Mumbai(polygon) testnet.
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Alchemy
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Fake store API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Metamask
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                href="https://github.com/Okpainmo/Master-NextJs13"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="live-site-link bg--secondary rounded-full w-[40px] h-[40px] p-[0.6rem]"
                href="https://www.youtube.com/playlist?list=PLELl52UgYR5FfH9zY0Lzknm6B4s1ILzcV"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
        className="text--colors_primary py-3 btn--outline text-sm px-4 xsm:px-10"
        target="_blank"
        rel="noreferrer"
      >
        See more on Youtube.
      </a>
    </section>
  );
}

export default Courses;
