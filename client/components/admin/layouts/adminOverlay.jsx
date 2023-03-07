import React from 'react';

function AdminOverlay({ children, mainOverlayHide, showMainOverlay }) {
  return (
    <main
      className={`hidden-scroll-bar admin-overlay text--colors_default bg-glass-2 fixed top-0 left-0 right-0 overflow-auto h-screen ${
        showMainOverlay ? 'block' : 'hidden'
      } px-3 bg--glass2 z-50 text-[12px] pt-10 xsm:px-[20px]`}
    >
      {/* <div className="w-full overflow-y-auto h-screen"> */}
      <div className="sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[700px] relative">
        <div
          className="close-btn fixed top-3 right-3 xsm:top-4 xsm:right-4 border w-[40px] h-[40px] rounded-full p-[10.5px] shadow-lg"
          onClick={mainOverlayHide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        {children}
      </div>
      {/* </div> */}
    </main>
  );
}

export default AdminOverlay;
