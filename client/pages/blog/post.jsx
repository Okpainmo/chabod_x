import React from 'react';
import MainAppLayout from '../../components/blog/layouts/MainAppLayout';
import Navbar from '../../components/blog/layouts/Navbar';
import PostPage from '../../components/blog/PostPage';

function blog() {
  return (
    <>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen">
          <PostPage />
        </main>
      </MainAppLayout>
    </>
  );
}

export default blog;
