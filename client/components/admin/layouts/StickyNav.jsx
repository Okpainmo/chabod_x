import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '../../../context/GlobalContext';

function StickyNav() {
  const { scrollHeightReached_2 } = useContext(GlobalContext);

  return (
    <section
      className={`text--colors_default nunito-sans ${
        scrollHeightReached_2 ? 'block fixed top-20 left-32 z-50' : 'hidden'
      }`}
    >
      <ul
        className="menu flex justify-between text-[10px] xsm:text-[12px] sm:text-[14px] py-4 px-3 xsm:px-[20px] sm:px-16 
     lg:flex-col lg:pt-12 lg:justify-start lg:gap-y-8"
      >
        <Link href="/admin">
          <li>Home</li>
        </Link>
        <Link href="/admin/blogger">
          <li>Blogger</li>
        </Link>
        <Link href="/admin/accounts">
          <li>Accounts</li>
        </Link>
        <Link href="/admin/newsletter">
          <li>Newsletter</li>
        </Link>
        <Link href="/admin/messages">
          <li>Messages</li>
        </Link>
      </ul>
    </section>
  );
}

export default StickyNav;
