import React from 'react';
import Image from 'next/image';
import me from '../../assets/images/me.jpg';

function TopScreen() {
  return (
    <section className="min-h-screen seller-intro text-center px-3 flex flex-col justify-center items-center">
      {/* <div className=""> */}
      <div className="seller-photo-wrapper">
        <Image
          className="rounded-full mx-auto"
          src={me}
          width={150}
          height={150}
          alt="seller-photo"
        />
      </div>
      <div className="seller-intro px-4">
        <div className="mt-12 mb-3 text-2xl sm:text-3xl md:text-4xl font-bold poppins text--colors_default">
          I'm Andrew James Okpainmo
        </div>
        <span className="text--colors_secondary md:text-[18px]">
          I am a full-stack developer, a blockchain developer, and a technical writer.
        </span>
        <div className="socials flex w-[100px] gap-6 mt-4 mx-auto justify-center">
          <a
            className="twitter bg--secondary w-[30px] h-[30px] rounded-full p-[0.5rem]"
            href="https://twitter.com/AJ_Okpainmo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="linked-in bg--secondary w-[30px] h-[30px] rounded-full p-[0.55rem]"
            href="https://www.linkedin.com/in/okpainmo-andrew/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </div>
      </div>
      <a
        href="#contacts-section"
        className="text-white connect btn--regular px-6 py-3 w-full mt-8 xsm:w-[400px] xsm:mt-8"
      >
        Let's Connect
      </a>
      <a href="#about-section" className="hidden">
        <div className="mt-10 sm:mt-16 sm:text-base font-bold poppins flex items-center justify-center gap-1">
          More about me{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-short arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
      </a>
      {/* </div> */}
    </section>
  );
}

export default TopScreen;
