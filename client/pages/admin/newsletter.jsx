import React, { useState } from 'react';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
import Navbar from '../../components/admin/layouts/Navbar';
import NewsLetterManager from '../../components/admin/newsletter-manager';
import FloatingNewsLetterButton from '../../components/admin/layouts/FloatingNewsLetterButton';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import CreateNewsletter from '../../components/admin/newsletter-manager/CreateNewsletter';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';
// import BlogHome from '../../components/blog/BlogHome';
// import MessagesCenter from '../../components/admin/message-center';

function NewsletterCenter() {
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
        <CreateNewsletter />
      </AdminOverlay>
      <Navbar />
      <FloatingNewsLetterButton mainOverlayShow={mainOverlayShow} />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <NewsLetterManager />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default NewsletterCenter;
