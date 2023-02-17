import React from 'react';
import Link from 'next/link';
import Emoji from '../Emoji';

function BlogHome() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 px-3 xsm:w-[85%] xsm:mx-auto lg:w-[70%]">
      <section className=" blog-intro border-b-2 pb-10 md:pb-20">
        <h1 className="poppins font-bold text-3xl md:text-4xl">
          Hey <Emoji symbol="👋" label="waving-hand" />, <br />
          Welcome to my blog.{' '}
        </h1>
        <p className="text--colors_secondary mt-4">
          <span className="text-lg font-bold montserrat">
            A minimalist blog about everything "software engineering" - From developer health, to
            software engineering resources, content creation, and more.
          </span>
          {/* <br /> <br />
          <span className="underline">Enjoy your time here.</span> */}
        </p>
      </section>
      <section className="flex flex-col lg:flex-row md:w-[80%] lg:w-full lg:justify-between">
        <section className="recent-post-wrapper mt-6 mb-12 md:mt-16 text-[12px] sm:text-[14px] lg:w-[60%]">
          <h3 className="uppercase font-bold text--colors_secondary mb-4 text-lg montserrat">
            Recent Posts
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
        <section className="categories-wrapper mt-8 text-[12px] sm:text-[14px] border-t-2 py-8 lg:border-t-0 lg:w-[35%] font-bold montserrat">
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
      </section>
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
    </div>
  );
}

export default BlogHome;
