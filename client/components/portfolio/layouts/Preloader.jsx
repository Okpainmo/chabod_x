import React from 'react';

function Preloader({ showResponsePreloader }) {
  return (
    <div
      className={`pre-loader fixed z-50 items-center gap-[10px] justify-center top-[20px] left-[50%] ml-[-100px] text-grey-500 shadow-md mb-8 mx-auto response-preloader text-center rounded-[10px] w-[200px] bg-white px-2 pt-[5px] pb-[9px] ${
        showResponsePreloader ? 'flex' : 'hidden'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="rotating top-[2px]"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        />
      </svg>
      <span>processing request.</span>
    </div>
  );
}

export default Preloader;
