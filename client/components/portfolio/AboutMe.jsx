import React from 'react';

function AboutMe() {
  return (
    <section
      className="about-me px-3 text-center xsm:w-[85%] xsm:mx-auto lg:w-[60%] pt-[100px]"
      id="about-section"
    >
      <h1 className="section-title text-2xl sm:text-4xl poppins poppins font-bold">About Me</h1>
      <div className="about-text text--colors_secondary mt-8 text-[14px] sm:text-[14px] leading-[22px]">
        <p className="mb-8">
          I am a highly gifted and intelligent Nigerian, who is passionate about building
          ground-breaking inventions with code.
        </p>
        <p className="mb-8">
          I am currently a fullstack Javascript/Typescript developer(ReactJs/NextJs + NodeJs), a
          blockchain(Solidity) developer, and a technical writer. <br /> I am also currently getting
          a hand on devOps and cloud-computing.
        </p>
        <p className="mb-8">
          In recent times, I am becoming highly interested in tech enterpreneurship and tech
          mentorship. I am currently building my first startup - Jobjo, along side{' '}
          <span className="underline">Zoe collectives</span> - mother company to a fleet of
          sub-startups.
        </p>
        <p className="mb-8">I love God a lot, and people do mean a lot to me as well.</p>
        <p className="mb-8">
          Below, <i className="underline">are some key technologies</i> that I am familiar with:
        </p>
        <div className="my-skills w-full flex justify-center pt-6 pb-10 flex-wrap gap-x-3 md:w-[60%] md:mx-auto">
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            HTML
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            CSS
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Javascript
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Typescript
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Jquery
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            SCSS
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Bootstrap
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            TailwindCSS
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Headless UI
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            ReactJs
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            NextJs
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Redux tool-kit
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Contentful CMS
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            NodeJs
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            ExpressJs
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            MongoDB
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Solidity
          </div>
          <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
            Hardhat + EthersJs
          </div>
        </div>
        <p className="mb-8">And more...</p>
        <p className="mb-8">
          I am currently open and available for front-end development, back-end development,
          full-stack development, blockchain development, or any technical writing roles.
        </p>
        <p className="mb-8">
          I will definitely be a strong addition to any team for any of the above mentioned roles. I
          will be very glad to contribute my experience towards the success of the team.
        </p>
      </div>
      <button
        type="button"
        className="text-white connect btn--regular px-6 py-3 w-full mt-10 xsm:w-[400px] hidden"
      >
        Download my resume
      </button>
    </section>
  );
}

export default AboutMe;
