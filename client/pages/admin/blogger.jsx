import React from 'react';
import { Toaster } from 'react-hot-toast';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
// import MainAdminLayout from '../../components/admin/layouts/MainAdminLayout';
import Navbar from '../../components/admin/layouts/Navbar';
// import BlogOverview from '../../components/admin/layouts/DashboardHome/BlogOverview';
// import DashboardHome from '../../components/admin/dashboard-home';
import Blogger from '../../components/admin/blogger';
import FloatingAddButton from '../../components/admin/layouts/FloatingAddButton';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import CreatePost from '../../components/admin/blogger/CreatePost';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';
import AdminPreloader from '../../components/admin/AdminPreloader';
import StickyNav from '../../components/admin/layouts/StickyNav';
// import MobileMenu from '../../components/admin/layouts/DashboardTop';

function BloggerCenter({ postsData, categoriesData }) {
  return (
    <>
      <Toaster />
      <AdminPreloader />
      <StickyNav />
      <AdminOverlay>
        <CreatePost categoriesData={categoriesData} />
      </AdminOverlay>
      <Navbar />
      <FloatingAddButton />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <Blogger postsData={postsData} />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default BloggerCenter;

export async function getServerSideProps() {
  // posts data fetching
  const pDResponse = await fetch('https://chabod-x.onrender.com/api/v1/posts/get-all-posts');
  const postsData = await pDResponse.json();

  // categories data fetching
  const cDResponse = await fetch(
    'https://chabod-x.onrender.com/api/v1/categories/get-all-categories'
  );
  const categoriesData = await cDResponse.json();
  return {
    props: {
      postsData,
      categoriesData
    }
  };
}
