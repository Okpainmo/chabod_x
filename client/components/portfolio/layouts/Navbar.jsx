import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicThemeSwitcher = dynamic(() => import('../../ThemeSwitcher'), {
  ssr: false
});

function Navbar() {
  // { mobileNavOpen }
  return (
    <nav className="top-navbar bg--glass2 w-full px-3 py-1 sm:py-2 shadow-sm dark:border-b fixed z-40 top-0 left-0 right-0 text--colors_default nunito-sans">
      <div className="lg:w-[80%] flex justify-between lg:mx-auto items-center">
        <div className="nav-left user-logo text-3xl md:text-4xl font-bold poppins text--colors_primary">
          <Link href="/">aj.</Link>
        </div>
        <ul
          className="nav-links hidden lg:flex gap-16 items-center text--secondary"
          style={{ fontSize: '12px' }}
        >
          <li className="poppins">
            <Link href="/">Home</Link>
          </li>
          <li className="poppins">
            <Link href="/#about-section">About Me</Link>
          </li>
          <li className="poppins">
            <Link href="/#courses-section">Tutorials/Courses</Link>
          </li>
          <li className="poppins hidden">
            <Link href="/#projects-section">Projects</Link>
          </li>
          <li className="poppins">
            <Link href="/#contacts-section">Contact</Link>
          </li>
          <li className="poppins">
            <Link href="/#blog-section">Blog</Link>
          </li>
        </ul>

        <DynamicThemeSwitcher />
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
