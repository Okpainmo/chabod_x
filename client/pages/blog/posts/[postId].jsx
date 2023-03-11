import React from 'react';
import MainAppLayout from '../../../components/blog/layouts/MainAppLayout';
import Navbar from '../../../components/blog/layouts/Navbar';
import PostPage from '../../../components/blog/PostPage';
import StickyTOCWrapper from '../../../components/blog/layouts/StickyTOCWrapper';

function PostPageWrapper({ data, params }) {
  const currentPost = data.allPosts.find((each) => {
    return each.postSlug === params.postId;
  });

  // console.log(currentPost);
  return (
    <>
      <Navbar />
      <StickyTOCWrapper currentPost={currentPost} />
      <MainAppLayout>
        <main className="min-h-screen">
          <PostPage currentPost={currentPost} />
        </main>
      </MainAppLayout>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch('https://chabod-x.onrender.com/api/v1/posts/get-all-posts');

  const postsData = await response.json();

  const paths = postsData.allPosts.map((post) => {
    return {
      params: { postId: post.postSlug }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default PostPageWrapper;

export async function getStaticProps(context) {
  const { params } = context;
  const url = 'https://chabod-x.onrender.com/api/v1/posts/get-all-posts';
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      data,
      params
    }
  };
}
