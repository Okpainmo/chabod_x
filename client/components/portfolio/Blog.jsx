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
            PolygonID and The Decentralized Self-Sovereign Identity(SSI) Revolution.
          </div>
          <div className="post-brief mt-2">
            PolygonID is a new and impressive way to manage your identity in the online(web3) space.
            It’s an amazing innovation in identity management that gives you self-sovereign power
            over how your identity is shared and used. This article seeks to unravel an...
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/polygonid-and-the-decentralized-self-sovereign-identityssi-revolution"
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
            5 things I wish I did earlier in my software engineering career.
          </div>
          <div className="post-brief mt-2">
            I know for sure, that I could have been far better than who I am today as a software
            engineer. I also agree that I could have gone farther and faster in my career if only I
            did certain things better. One of my...
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/5-things-i-wish-i-did-earlier-in-my-software-engineering-career"
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
            How To Add Light And Dark Theme-Toggle To A NextJs App Using Tailwindcss.
          </div>
          <div className="post-brief mt-2">
            The world of programming is a “world of trends”. Trends come and go. While some last for
            just a little while, others can last very long — some might even get to stay forever.
            Such trends can...
          </div>
          <div className="post-link mt-2 font-bold poppins">
            <a
              href="https://zhacks.hashnode.dev/how-to-add-light-and-dark-theme-toggle-to-a-nextjs-app-using-tailwindcss"
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
            Read more on my blog
          </button>
        </a>
      </div>
    </section>
  );
}

export default Blog;
