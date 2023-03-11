import React from 'react';
import MainAppLayout from '../../components/blog/layouts/MainAppLayout';
import Navbar from '../../components/blog/layouts/Navbar';
import BlogHome from '../../components/blog/BlogHome';
import StickyCategoriesWrapper from '../../components/blog/layouts/StickyCategoriesWrapper';

function blog({ postsData }) {
  return (
    <>
      <Navbar />
      <StickyCategoriesWrapper />
      <MainAppLayout>
        <main className="min-h-screen">
          <BlogHome postsData={postsData} />
        </main>
      </MainAppLayout>
    </>
  );
}

export default blog;

export async function getStaticProps() {
  // const { params } = context;
  const response = await fetch('https://chabod-x.onrender.com/api/v1/posts/get-all-posts');
  const postsData = await response.json();

  return {
    props: {
      postsData
    }
  };
}
