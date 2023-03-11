import React, { useContext } from 'react';
import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';

function FloatingAddButton() {
  const { mainOverlayShow } = useContext(GlobalAdminContext);
  return (
    <div
      className="add-post-btn-wrapper fixed z-40 bottom-[20px] md:bottom-[30px] right-[20px] md:right-[30px]"
      onClick={mainOverlayShow}
      // onClick={() => {
      //   alert('hello world');
      // }}
    >
      <button
        type="button"
        className="text-[12px] btn--regular w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-[11px] md:p-[16px] shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default FloatingAddButton;
