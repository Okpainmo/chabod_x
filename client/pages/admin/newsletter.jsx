import React from 'react';
import MainAppLayout from '../../components/admin/layouts/MainAppLayout';
import Navbar from '../../components/admin/layouts/Navbar';
import NewsLetterManager from '../../components/admin/newsletter-manager';
import FloatingNewsLetterButton from '../../components/admin/layouts/FloatingNewsLetterButton';
import AdminOverlay from '../../components/admin/layouts/adminOverlay';
import CreateNewsletter from '../../components/admin/newsletter-manager/CreateNewsletter';
import DashboardMenu from '../../components/admin/layouts/DashboardMenu';
import StickyNav from '../../components/admin/layouts/StickyNav';
// import BlogHome from '../../components/blog/BlogHome';
// import MessagesCenter from '../../components/admin/message-center';

function NewsletterCenter({ newsletterData }) {
  return (
    <>
      <StickyNav />
      <AdminOverlay>
        <CreateNewsletter />
      </AdminOverlay>
      <Navbar />
      <FloatingNewsLetterButton />
      <MainAppLayout>
        <main className="lg:flex lg:flex-row lg:justify-between lg:gap-x-10">
          <DashboardMenu />
          <section className="min-h-screen px-3 xsm:px-[20px] sm:px-16 lg:w-[80%]">
            <NewsLetterManager newsletterData={newsletterData} />
          </section>
        </main>
      </MainAppLayout>
    </>
  );
}

export default NewsletterCenter;

export async function getServerSideProps() {
  // const { params } = context;
  const response = await fetch(
    'https://chabod-x.onrender.com/api/v1/newsletter/get-all-subscribers'
  );
  const newsletterData = await response.json();

  return {
    props: {
      newsletterData
    }
  };
}
