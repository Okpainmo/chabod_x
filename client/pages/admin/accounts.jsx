import React, { useState } from 'react';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
// import MainAdminLayout from '../../components/admin/layouts/MainAdminLayout';
import Navbar from '../../components/admin/layouts/Navbar';
// import BlogOverview from '../../components/admin/layouts/DashboardHome/BlogOverview';
// import DashboardHome from '../../components/admin/dashboard-home';
// import Blogger from '../../components/admin/blogger';
import AdminAccounts from '../../components/admin/accounts';
import FloatingAddButton from '../../components/admin/layouts/FloatingAddButton';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import CreateAdmin from '../../components/admin/accounts/CreateAdmin';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';
// import MobileMenu from '../../components/admin/layouts/DashboardTop';

function AdminHome() {
  const [showMainOverlay, setShowMainOverlay] = useState(false);

  const mainOverlayHide = () => {
    setShowMainOverlay(false);
  };

  const mainOverlayShow = () => {
    setShowMainOverlay(true);
  };
  return (
    <>
      <AdminOverlay showMainOverlay={showMainOverlay} mainOverlayHide={mainOverlayHide}>
        <CreateAdmin />
      </AdminOverlay>
      <Navbar />
      <FloatingAddButton mainOverlayShow={mainOverlayShow} />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <AdminAccounts />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default AdminHome;
