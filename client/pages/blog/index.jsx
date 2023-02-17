import React from 'react';
import MainAppLayout from '../../components/blog/layouts/MainAppLayout';
import Navbar from '../../components/blog/layouts/Navbar';
import BlogHome from '../../components/blog/BlogHome';

function blog() {
  return (
    <>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen">
          <BlogHome />
        </main>
      </MainAppLayout>
    </>
  );
}

export default blog;
