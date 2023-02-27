import React, { useState } from 'react';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
import Navbar from '../../components/admin/layouts/Navbar';
// import BlogHome from '../../components/blog/BlogHome';
import Messages from '../../components/admin/messages';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import MessageReply from '../../components/admin/messages/MessageReply';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';

function MessageCenter({ messagesData }) {
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
            <Messages mainOverlayShow={mainOverlayShow} messagesData={messagesData} />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default MessageCenter;

export async function getServerSideProps() {
  // const { params } = context;
  const response = await fetch('https://chabod-x.onrender.com/api/v1/messages/get-all-messages');
  const messagesData = await response.json();

  return {
    props: {
      messagesData
    }
  };
}
