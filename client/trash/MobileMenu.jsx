import React from 'react';
import Link from 'next/link';

function MobileMenuBar({ mobileNavClose, closeMobileNav }) {
  return (
    <section
      className={`${
        closeMobileNav ? 'nav--slide-out' : 'nav--slide-in'
      } fixed py-8 px-4 top-0 right-0 left-0 lg:hidden overflow-auto h-screen w-full z-50 bg--glass`}
    >
      <div className="close-btn fixed top-8 right-4" onClick={mobileNavClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   width="20"
          //   height="20"
          fill="currentColor"
          className="bi bi-x-lg  w-[20px] sm:w-[30px]"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-y-6 text-xl font-bold text-left min-h-[500px] border-b w-full pb-10">
        <Link
          onClick={mobileNavClose}
          href="/all-products"
          className="my-2 relative ml-[20px] min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%] before:w-[7px]
           before:h-[7px] before:block before:bg-gray-300 before:absolute before:left-[-15px]"
        >
          <div className="flex gap-2 items-center">
            <span>Home</span>
          </div>
        </Link>
        <Link
          onClick={mobileNavClose}
          href="/all-productst"
          className="my-2 relative ml-[20px] min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%] before:w-[7px]
           before:h-[7px] before:block before:bg-gray-300 before:absolute before:left-[-15px]"
        >
          <span>About Me</span>
        </Link>
        <Link
          onClick={mobileNavClose}
          href="/all-productst"
          className="my-2 relative ml-[20px] min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%] before:w-[7px]
           before:h-[7px] before:block before:bg-gray-300 before:absolute before:left-[-15px]"
        >
          <span>Projects</span>
        </Link>
        <Link
          onClick={mobileNavClose}
          href="/all-productst"
          className="my-2 relative ml-[20px] min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%] before:w-[7px]
           before:h-[7px] before:block before:bg-gray-300 before:absolute before:left-[-15px]"
        >
          <span>Contacts</span>
        </Link>
        <Link
          onClick={mobileNavClose}
          href="/all-productst"
          className="my-2 relative ml-[20px] min-w-[100px] hover:tracking-[1px] transition-all duration-700 w-[80%] before:w-[7px]
           before:h-[7px] before:block before:bg-gray-300 before:absolute before:left-[-15px]"
        >
          <span>Blog</span>
        </Link>
      </div>
    </section>
  );
}

export default MobileMenuBar;
