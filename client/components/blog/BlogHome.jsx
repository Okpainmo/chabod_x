import React from 'react';
import Link from 'next/link';
import Emoji from '../Emoji';

function BlogHome({ postsData }) {
  // console.log(postsData);

  return (
    <div className="">
      <section className="blog_bg--primary px-3 pt-28 sm:pt-24 md:pt-32 xsm:px-[20px]">
        <div className="blog-intro pb-10 md:pb-20 sm:w-[80%] xsm:mx-auto">
          <h1 className="poppins font-bold text-3xl md:text-4xl">
            Hey <Emoji symbol="👋" label="waving-hand" />, <br />
            Welcome to my blog.{' '}
          </h1>
          <p className="mt-10">
            <span className="text-base montserrat">
              A minimalist blog about everything "software engineering" - From developer health, to
              software engineering resources, tutorials, <br /> content creation, and more.
            </span>
            {/* <br /> <br />
          <span className="underline">Enjoy your time here.</span> */}
          </p>
        </div>
      </section>
      <section className="xsm:px-[20px] sm:w-[80%] sm:mx-auto px-3 pb-16">
        <div className="recent-posts flex flex-col lg:flex-row md:w-[80%] lg:w-full lg:justify-between">
          <section className="recent-post-wrapper mt-6 mb-12 md:mt-16 text-[12px] sm:text-[14px] lg:w-[60%]">
            <h3 className="uppercase font-bold text--colors_secondary mb-4 text-lg montserrat">
              Recent Posts
            </h3>
            <div className="posts-wrapper">
              {postsData.allPosts.map((each) => {
                const { _id: id, postTitle, postBrief, postSlug } = each;

                return (
                  <div className="post mt-12 md:mb-16" key={id}>
                    <div className="post-title text-[17px] font-bold poppins">{postTitle}</div>
                    <div className="post-brief mt-2">{postBrief}</div>
                    <div className="post-link mt-2 font-bold poppins">
                      <Link
                        className="underline text--colors_primary"
                        href={`/blog/posts/${postSlug}`}
                      >
                        Read post
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="categories-wrapper mt-8 text-[12px] sm:text-[14px] border-t-2 py-8 lg:border-t-0 lg:w-[30%] font-bold montserrat">
            <h3 className="uppercase font-bold text--colors_secondary mb-2 text-lg">
              All categories
            </h3>
            <div className="categories w-full flex flex-wrap gap-x-3 md:w-[90%]">
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
              <div className="category-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px] rounded">
                firebase
              </div>
            </div>
          </section>
        </div>
        <section className="most-loved-wrapper mt-6 mb-16 text-[12px] sm:text-[14px] border-t-2 pt-8 md:w-[80%] lg:w-[60%]">
          <h3 className="uppercase font-bold text--colors_secondary mb-4 text-lg montserrat">
            Most loved posts
          </h3>
          <div>
            <div className="post mt-4 md:mb-16">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <Link className="underline text--colors_primary" href="/blog/post">
                  Read post
                </Link>
              </div>
            </div>
            <div className="post mt-12 md:mb-16">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <a className="underline text--colors_primary" href="g.com">
                  Read post
                </a>
              </div>
            </div>
            <div className="post mt-12 md:mb-16">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <a className="underline text--colors_primary" href="g.com">
                  Read post
                </a>
              </div>
            </div>
            <div className="post mt-12 md:mb-16">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <a className="underline text--colors_primary" href="g.com">
                  Read post
                </a>
              </div>
            </div>
            <div className="post mt-12 md:mb-16">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <a className="underline text--colors_primary" href="g.com">
                  Read post
                </a>
              </div>
            </div>
            <div className="post mt-12">
              <div className="post-title text-[17px] font-bold poppins">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </div>
              <div className="post-brief mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quod sequi
                nostrum nulla expedita. Iste quidem dolor at fuga sunt.
              </div>
              <div className="post-link mt-2 font-bold poppins">
                <a className="underline text--colors_primary" href="g.com">
                  Read post
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogHome;
