import React from 'react';
import Link from 'next/link';
// import { GlobalAdminContext } from '../../../context/admin/GlobalAdminContext';

function DashboardMenu() {
  // const { scrollHeightReached } = useContext(GlobalAdminContext);

  return (
    <ul
      className="menu flex justify-between text-[10px] xsm:text-[12px] sm:text-[14px] py-4 px-3 xsm:px-[20px] sm:px-16 
    border-b border-t lg:flex-col lg:border-t-0 lg:borderb-0 lg:pt-12 lg:justify-start lg:gap-y-8 lg:w-[20%]"
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
  );
}

export default DashboardMenu;
