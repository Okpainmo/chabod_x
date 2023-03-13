import React from 'react';
import MainAppLayout from '../../components/blog/layouts/MainAppLayout';
import Navbar from '../../components/blog/layouts/Navbar';
import BlogHome from '../../components/blog/BlogHome';
import StickyCategoriesWrapper from '../../components/blog/layouts/StickyCategoriesWrapper';

function blog({ postsData, categoriesData }) {
  return (
    <>
      <Navbar />
      <StickyCategoriesWrapper categoriesData={categoriesData} />
      <MainAppLayout>
        <main className="min-h-screen">
          <BlogHome postsData={postsData} categoriesData={categoriesData} />
        </main>
      </MainAppLayout>
    </>
  );
}

export default blog;

export async function getStaticProps() {
  // posts data fetching

  // const { params } = context;
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
