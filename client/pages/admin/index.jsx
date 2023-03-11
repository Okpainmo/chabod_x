import React from 'react';
import { Toaster } from 'react-hot-toast';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
// import MainAdminLayout from '../../components/admin/layouts/MainAdminLayout';
import Navbar from '../../components/admin/layouts/Navbar';
// import BlogOverview from '../../components/admin/layouts/DashboardHome/BlogOverview';
import DashboardHome from '../../components/admin/dashboard-home';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import MessageReply from '../../components/admin/messages/MessageReply';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';
import StickyNav from '../../components/admin/layouts/StickyNav';
import CreateCategory from '../../components/admin/dashboard-home/CreateCategory';
import AdminPreloader from '../../components/admin/AdminPreloader';
// import MobileMenu from '../../components/admin/layouts/DashboardTop';

function AdminHome({ categoriesData, messagesData, postsData }) {
  return (
    <>
      <Toaster />
      <AdminPreloader />
      <StickyNav />
      <AdminOverlay>
        <MessageReply />
        <CreateCategory />
      </AdminOverlay>
      <Navbar />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <DashboardHome
              categoriesData={categoriesData}
              messagesData={messagesData}
              postsData={postsData}
            />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default AdminHome;

export async function getServerSideProps() {
  // categories data fetching
  const cDResponse = await fetch(
    'https://chabod-x.onrender.com/api/v1/categories/get-all-categories'
  );
  const categoriesData = await cDResponse.json();

  // messages data fetching
  const mDResponse = await fetch('https://chabod-x.onrender.com/api/v1/messages/get-all-messages');
  const messagesData = await mDResponse.json();

  // posts data fetching
  const pDResponse = await fetch('https://chabod-x.onrender.com/api/v1/posts/get-all-posts');
  const postsData = await pDResponse.json();
  return {
    props: {
      categoriesData,
      messagesData,
      postsData
    }
  };
}
