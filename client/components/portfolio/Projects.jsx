import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import deecoBanner from '../../assets/images/deeco-main-banner.png';
// import reactifyBanner from '../../assets/images/reactify-main-banner.png';
import chabodXBanner from '../../assets/images/chabod-x-main-banner.png';
import chabodBanner from '../../assets/images/chabod-main-banner.png';
import tiloBanner from '../../assets/images/tilo-main-banner.png';
import journieBanner from '../../assets/images/journie-banner.png';
import dpprBanner from '../../assets/images/developer-profiles-project-banner.jpg';
import Emoji from '../Emoji';

function Projects() {
  return (
    <section
      className="hidden projects text-center mt-[50px] lg:mt-[200px] pt-[100px] mb-[150px] px-3 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-full lg:px-8"
      id="projects-section"
    >
      <h1 className="text-2xl sm:text-4xl section-title poppins font-bold">Projects </h1>
      <h3 className="text-base sm:text-xl text--colors_secondary my-4 sm:my-6 lg:mb-12 poppins">
        A selection of some of my projects
      </h3>
      <div className="flex flex-col gap-y-12 lg:gap-y-20 mb-16">
        <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
          <div className="project-banner-wrapper lg:w-[45%]">
            <Image
              className="w-full shadow-lg"
              src={deecoBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              Deeco.
            </div>
            <div className="project-brief mb-3">
              Deeco is a blockchain e-commerce platform. It powers e-commerce experiences but with
              cryptocurrency based payments. It is a solo-project that I built as my hackathon
              submission for the Polygon Africa web3/blockchain bootcamp of 2022. Deeco was among
              the winning-projects in my category of the hackathon. To fully explore the live
              project, please use a PC.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
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
                href="https://github.com/Okpainmo/deeco"
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
                href="https://deeco.vercel.app/"
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
              src={dpprBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              The Developer Profiles Project.
            </div>
            <div className="project-brief mb-3">
              The Developer Profile Project is a MERN stack project that I built to help
              tutor/mentor developers through{' '}
              <a
                href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                target="_blank"
                rel="noreferrer"
                className="text--colors_primary underline"
              >
                my youtube channel
              </a>{' '}
              . The Github repository contains all the different tutorial versions and stacks that
              I've built with the project to help teach and demonstrate different technologies on my
              youtube channel. The project repository contains two branches. One for builds with
              Javascript, and the other for builds made with Typescript. <br /> <br />
              With this single project, I've taught NodeJs/Express, ReactJs, React Context API,
              NextJs 13, HTML, TailwindCSS, VanillaJS and more, on{' '}
              <a
                href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                target="_blank"
                rel="noreferrer"
                className="text--colors_primary underline"
              >
                youtube
              </a>{' '}
              .
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                HTML
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Vanilla Javascript
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                TailwindCSS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                ReactJS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NextJs 13
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NodeJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                ExpressJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                MongoDB
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Typescript(for both Back-end and Front-end)
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Zod
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Axios
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                href="https://vercel.com/okpainmo/developer-profiles-project-youtube-nextjs-context-api-version"
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
                href="https://developer-profiles-project-youtube-nextjs-context-api-version.vercel.app/"
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
              src={journieBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              Journie.
            </div>
            <div className="project-brief mb-3">
              Journie is a productivity app for note taking, scheduling and task management, and
              journaling. It is a fullstack app built with the MERN stack and so much more. It's a
              project I am excited about - especially considering the awesome features that I hope
              to roll into subsequent versions of the app.
              <br />
              The project is live currently with a good number of sign ups.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
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
                NodeJs{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                ExpressJs{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Headless UI{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                JWT
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                AWS S3
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React hot toast{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                BcryptJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Multer{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Mongoose{' '}
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Axios
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                href="https://github.com/Okpainmo/journie"
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
                href="https://journie.vercel.app/"
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
        <div className="hidden">
          <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
            <div className="project-banner-wrapper lg:w-[45%]">
              <Image
                className="w-full shadow-lg"
                src={tiloBanner}
                // width={150}
                // height={150}
                alt="project-banner"
              />
            </div>
            <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
              <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
                Tilo.
              </div>
              <div className="project-brief mb-3">
                Tilo is a beautiful side-project I am working on. It's a crypto based project to aid
                cryptocurrency marketers and other cryto enthusiasts in watching and trading the
                market with ease, thanks to a user experience that is streamlined towards simplicity
                and efficiency. It provides a base for traders to watch the market(top 50 coins),
                keep an eye on trending coins, and more. For now, only most of the front-end aspect
                is ready. In the next iteration of the project, I hope to complete it into a full
                stack project with a coin/token swap included - hence powering it up with
                blockchain/web3 capabilities.
              </div>
              <Link href="/project-story" className="text-[12px] hidden">
                <span className="underline text--colors_primary">Read full project story</span>
              </Link>
              <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  NextJs/ReactJs
                </div>
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  TailwindCSS
                </div>
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  Crypto APIs (thanks to coingecko)
                </div>
              </div>
              <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
                <a
                  className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                  href="https://github.com/Okpainmo/tilo"
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
                  href="https://tilo-project.vercel.app/coins-watchlist"
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
          <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg hidden sm:hidden md:hidden lg:hidden">
            <div className="project-banner-wrapper lg:w-[45%]">
              <Image
                className="w-full shadow-lg"
                src={chabodBanner}
                // width={150}
                // height={150}
                alt="project-banner"
              />
            </div>
            <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
              <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
                The Chabod project.
              </div>
              <div className="project-brief mb-3">
                A project I call "my single product start-up"{' '}
                <Emoji symbol="😊😊😊" label="three blushing faces" />. Even though it is the first
                major project of my web development career, I remain very proud of it. It remains
                one project that greatly revealed my determination and ingenuity. I{' '}
                <strong>singlehandedly</strong> built the product(a portfolio website template),
                built the sales website, and did everything in between like writing a
                user-documentation, the terms of use document, setting up sales, and even more. I
                only got some help with marketing later on.
                <br /> The project currently has{' '}
                <a
                  href="https://www.producthunt.com/products/chabod"
                  target="_blank"
                  rel="noreferrer"
                  className="text--colors_primary underline"
                >
                  37 upvotes on product hunt.
                </a>
              </div>
              <Link href="/project-story" className="text-[12px] hidden">
                <span className="underline text--colors_primary">Read full project story</span>
              </Link>
              <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  HTML
                </div>
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  CSS/SCSS
                </div>
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  Bootstrap 5
                </div>
                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  Vanilla Javascript
                </div>

                <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                  Gulp.Js
                </div>
              </div>
              <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
                <a
                  className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                  href="https://github.com/Okpainmo/get_chabod"
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
                  href="https://getchabod.netlify.app/"
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
        <div className="project-card shade-1 lg:no-shade px-3 pt-6 pb-10 lg:flex lg:flex-row lg:pb-6 lg:w-[80%] lg:mx-auto lg:px-6 rounded-lg">
          <div className="project-banner-wrapper lg:w-[45%]">
            <Image
              className="w-full shadow-lg"
              src={chabodXBanner}
              // width={150}
              // height={150}
              alt="project-banner"
            />
          </div>
          <div className="project-details lg:text-left lg:pl-12 lg:w-[55%] mb-3 mt-4 lg:mt-0 text-[12px] sm:text-[14px]">
            <div className="project-name poppins text-xl sm:text-2xl font-bold mb-2 lg:mb-3">
              Chabod_x.
            </div>
            <div className="project-brief mb-3">
              Chabod_x is a massive fullstack blog-folio web-app. It is an opensource project that I
              am building to give professionals the portfolio management tool that I never got until
              now. The project is a packed solution. It consist of a portfolio website, a custom
              blog, a blog manager, a newsletter manager, and other admin functionalities. Chabod_x
              is what powers this(my) portfolio website that you're currently on.
            </div>
            <Link href="/project-story" className="text-[12px] hidden">
              <span className="underline text--colors_primary">Read full project story</span>
            </Link>
            <div className="tags flex flex-wrap justify-center lg:justify-start gap-x-3 mt-3">
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NextJs/ReactJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Tailwind CSS
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                NodeJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                ExpressJs
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                MongoDB
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                Mongoose ODM
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React Context API
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                React hot toast
              </div>
              <div className="tag skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
                More
              </div>
            </div>
            <div className="links flex w-[100px] gap-6 mt-8 mx-auto justify-center lg:justify-start lg:mx-0">
              <a
                className="github-link bg--secondary w-[40px] h-[40px] rounded-full p-[0.6rem]"
                href="https://github.com/Okpainmo/chabod_x"
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
                href="https://chabod-x.vercel.app/admin/"
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
        href="https://github.com/Okpainmo"
        className="text--colors_primary py-3 btn--outline text-sm px-4 xsm:px-10"
        target="_blank"
        rel="noreferrer"
      >
        Checkout more projects on github
      </a>
    </section>
  );
}

export default Projects;
