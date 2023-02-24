import React from 'react';

function BlogOverview() {
  return (
    <>
      <section className="categories-overview">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">Blog overview</h3>
        <nav className="overview-header mt-3">
          <ul className="flex justify-between text-[12px] md:text-[14px] px-2">
            <li>Category</li>
            <li>Post count</li>
          </ul>
          <div className="overview-content flex flex-col gap-y-4 mt-4">
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px] md:text-[14px]">
                <li className="font-bold montserrat w-10/12">ReactJs</li>
                <li className="w-2/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px] md:text-[14px]">
                <li className="font-bold montserrat w-10/12">ReactJs</li>
                <li className="w-2/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px] md:text-[14px]">
                <li className="font-bold montserrat w-10/12">ReactJs</li>
                <li className="w-2/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px] md:text-[14px]">
                <li className="font-bold montserrat w-10/12">ReactJs</li>
                <li className="w-2/12 text-center">20</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="most-loved-posts mt-8">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">
          Most loved posts
        </h3>
        <nav className="overview-header mt-3">
          <ul className="flex justify-between text-[12px] md:text-[14px] px-2">
            <li>Post details</li>
            <li>Reactions</li>
          </ul>
          <div className="overview-content flex flex-col gap-y-4 mt-4">
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <div className="flex justify-between text-[12px] md:text-[14px] w-full">
                <div className="post-info w-10/12">
                  <div className="post-title mb-2 font-bold montserrat">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                </div>
                <div className="reaction-count w-2/12 flex justify-center items-center">20</div>
              </div>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <div className="flex justify-between text-[12px] md:text-[14px] w-full">
                <div className="post-info w-10/12">
                  <div className="post-title mb-2 font-bold montserrat">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                </div>
                <div className="reaction-count w-2/12 flex justify-center items-center">20</div>
              </div>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <div className="flex justify-between text-[12px] md:text-[14px] w-full">
                <div className="post-info w-10/12">
                  <div className="post-title mb-2 font-bold montserrat">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                </div>
                <div className="reaction-count w-2/12 flex justify-center items-center">20</div>
              </div>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <div className="flex justify-between text-[12px] md:text-[14px] w-full">
                <div className="post-info w-10/12">
                  <div className="post-title mb-2 font-bold montserrat">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                </div>
                <div className="reaction-count w-2/12 flex justify-center items-center">20</div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default BlogOverview;
