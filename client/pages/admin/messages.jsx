import React, { useState } from 'react';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
import Navbar from '../../components/admin/layouts/Navbar';
// import BlogHome from '../../components/blog/BlogHome';
import Messages from '../../components/admin/messages';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import MessageReply from '../../components/admin/messages/MessageReply';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';

function MessageCenter() {
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
        <MessageReply />
      </AdminOverlay>
      <Navbar />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <Messages mainOverlayShow={mainOverlayShow} />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default MessageCenter;
