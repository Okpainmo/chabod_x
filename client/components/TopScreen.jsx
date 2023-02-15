import React from 'react';
import Image from 'next/image';
import me from '../assets/images/me.jpg';

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
        <div className="mt-12 mb-3 text-3xl md:text-4xl font-bold poppins text--colors_default">
          I'm Andrew James Okpainmo
        </div>
        <span className="text--colors_secondary text-xl">
          I am a full-stack developer, a blockchain developer, and a technical writer.
        </span>
      </div>
      <button
        type="button"
        className="text-white connect btn--regular px-6 py-3 w-full text-xl mt-8 xsm:w-[400px] xsm:mt-8"
      >
        Let's Connect
      </button>
      <div className="mt-16 text-xl font-bold poppins flex items-center justify-center gap-1">
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
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </div>
      {/* </div> */}
    </section>
  );
}

export default TopScreen;
