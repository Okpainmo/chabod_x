import React from 'react';
import dynamic from 'next/dynamic';

const DynamicThemeSwitcher = dynamic(() => import('../../ThemeSwitcher'), {
  ssr: false
});

function Navbar() {
  // { mobileNavOpen }
  return (
    <nav className="top-navbar bg--glass2 w-full px-3 xsm:px-[20px] sm:px-16 py-1 sm:py-2 shadow-sm dark:border-b fixed z-40 top-0 left-0 right-0 text--colors_default nunito-sans">
      <div className="flex lg:mx-auto items-center">
        <section className="nav-left user-logo text-3xl md:text-4xl font-bold poppins text--colors_primary mr-auto">
          aj.
        </section>
        <ul
          className="nav-links hidden lg:flex gap-16 items-center text--secondary mr-16"
          style={{ fontSize: '12px' }}
        >
          <li className="poppins">Portfolio</li>
          {/* <li className="poppins">About Me</li>
          <li className="poppins">Projects</li>
          <li className="poppins">Contact</li> */}
          <li className="poppins">Blog</li>
        </ul>

        <section
          className="relative nav-right flex items-center gap-6 md:gap-8 before:w-[10px]
           before:h-[10px] before:rounded-[100%] before:block before:bg--primary before:absolute before:left-[10px] before:top-[3px]"
        >
          <div className="notification-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </div>
          <DynamicThemeSwitcher />
        </section>
        {/* <button
            onClick={mobileNavOpen}
            type="button"
            className="menu-button rounded-full w-[35px] 
          h-[35px] p-[7px] lg:w-[40px] lg:h-[40px] border lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-three-dots-vertical w-[20px] h-[20px] 
            lg:h-[25px] lg:w-[25px]"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button> */}
        {/* <div className="user-auth hidden lg:flex lg:items-center">
          <UserAuthLinks />
        </div> */}
      </div>
      {/* <div className="nav-right w-[50px] h-[50px] rounded-[100%]" onClick={mobileNavOpen}>
        <DynamicThemeSwitcher />
      </div> */}
    </nav>
  );
}

export default Navbar;
