import React from 'react';
// import Link from 'next/link';

function Blog() {
  return (
    <section
      className="blog mb-[100px] md:mb-[200px] text-center px-3 sm:w-[80%] sm:mx-auto md:w-[70%] lg:w-[50%] pt-[100px]"
      id="blog-section"
    >
      <h1 className="section-title text-2xl sm:text-4xl poppins font-bold mb-12">Read My Blog</h1>
      {/* <h3 className="text-xl text--colors_secondary mt-6 mb-6 lg:mb-12 poppins">
        A collection of my recently published articles.
      </h3> */}
      <div className="blog-posts text-[12px] sm:text-[14px]">
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Reflecting on my best dev year yet. (Dev Retro 2022)
          </div>
          <div className="post-brief mt-2">
            2022 was an awesome year for me - I truly won't be wrong to call it my best dev year
            ever. I welcome you to this interesting read where I'll take you through how awesome
            2022 was for me.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/reflecting-on-my-best-dev-year-yet-dev-retro-2022"
              target="_blank"
              rel="noreferrer"
              className="underline text--colors_primary"
            >
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            Finish Celebrating Hacktoberfest 2022 by contributing to Reactify.
          </div>
          <div className="post-brief mt-2">
            Reactify is primarily a project(an opensource blog) that is meant to help people learn
            some web development technologies that I have come to love. Like the name of the project
            already states, the first of such amazing web development technologies, is ReactJs.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/finish-celebrating-hacktoberfest-2022-by-contributing-to-reactify"
              target="_blank"
              rel="noreferrer"
              className="underline text--colors_primary"
            >
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            7 Bug Handling And Problem-solving Tips For Developers.
          </div>
          <div className="post-brief mt-2">
            Learning to fix bugs and handle problems, are special arts that every developer/software
            engineer must master. While some might argue that bug handling and problem-solving
            cannot be mastered, I beg to differ somehow.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/7-bug-handling-and-problem-solving-tips-for-developers"
              target="_blank"
              rel="noreferrer"
              className="underline text--colors_primary"
            >
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            How to build a complete/full-stack blog with NextJS(React JS) and contentful CMS.
          </div>
          <div className="post-brief mt-2">
            In this two-article series, I will walk you through the process of building a
            complete/full-stack blog with one of such CMS platforms – Contentful. This is the first
            Article in the series.
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/how-to-build-a-completefull-stack-blog-with-nextjsreact-js-and-contentful-cms"
              target="_blank"
              rel="noreferrer"
              className="underline text--colors_primary"
            >
              Read post
            </a>
          </div>
        </div>
        <div className="post text-center mb-16">
          <div className="post-title text-[17px] font-bold poppins">
            How to build a complete/full-stack blog with NextJS(React JS) and contentful CMS(Part
            2).{' '}
          </div>
          <div className="post-brief mt-2">
            CMS platforms are powerful options that help front-end developers build amazing products
            and services without even a single line of backend code. This article is the second part
            of a 2-part build-article series that involves building an amazing blog using one of
            such awesome CMS platforms called Contentful .
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/how-to-build-a-complete-blog-with-nextjsreact-js-and-contentful-cmspart-2"
              target="_blank"
              rel="noreferrer"
              className="underline text--colors_primary"
            >
              Read post
            </a>
          </div>
        </div>

        <a
          href="https://zhacks.hashnode.dev"
          target="_blank"
          rel="noreferrer"
          className="blog-link"
        >
          <button
            type="button"
            className="text-white connect btn--regular px-6 py-3 w-full sm:mt-12 xsm:w-[400px] text-[14px]"
          >
            Explore my blog
          </button>
        </a>
      </div>
    </section>
  );
}

export default Blog;
