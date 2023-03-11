import React from 'react';
import DashboardTop from './DashboardTop';
// import AdminOverlay from './adminOverlay';
// import Footer from '../../../trash/Footer';

function MainAppLayout({ children }) {
  return (
    <main className="main-app-layout bg--glass text--colors_default nunito-sans lg:px-[10%]">
      {/* <AdminOverlay /> */}
      <DashboardTop />
      {/* <Navbar /> */}
      {children}
      {/* <NewsletterSection /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default MainAppLayout;
