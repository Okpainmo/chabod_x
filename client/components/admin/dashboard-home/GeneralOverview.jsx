import React from 'react';
import UnrepliedMessages from './UnrepliedMessages';

function GeneralOverview({ mainOverlayShow }) {
  return (
    <>
      <section className="categories-overview mb-8 md:w-full md:justify-between md:flex-wrap md:flex-row mt-12">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">Blog overview</h3>
        <nav className="overview-header mt-3">
          <ul className="flex justify-between text-[12px] px-2 md:px-0">
            <li>Category</li>
            <li>Post count</li>
          </ul>
          <div className="overview-content flex flex-col gap-y-4 mt-4">
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px]">
                <li className="font-bold montserrat w-10/12 md:w-11/12">ReactJs</li>
                <li className="w-2/12 md:w-1/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px]">
                <li className="font-bold montserrat w-10/12 md:w-11/12">ReactJs</li>
                <li className="w-2/12 md:w-1/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px]">
                <li className="font-bold montserrat w-10/12 md:w-11/12">ReactJs</li>
                <li className="w-2/12 md:w-1/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px]">
                <li className="font-bold montserrat w-10/12 md:w-11/12">ReactJs</li>
                <li className="w-2/12 md:w-1/12 text-center">20</li>
              </ul>
            </div>
            <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
              <ul className="flex justify-between text-[12px]">
                <li className="font-bold montserrat w-10/12 md:w-11/12">ReactJs</li>
                <li className="w-2/12 md:w-1/12 text-center">20</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <UnrepliedMessages mainOverlayShow={mainOverlayShow} />
      <section className="most-loved-posts mt-8 md:w-full md:justify-between md:flex-wrap md:flex-row">
        <h3 className="mt-4 montserrat text-xl font-bold text--colors_secondary">
          Most loved posts
        </h3>
        <ul className="overview-header mt-3 flex justify-between text-[12px] px-2 md:px-0">
          <li>Post details</li>
          <li>Reactions</li>
        </ul>
        <div className="overview-content flex flex-col gap-y-4 mt-4">
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
          <div className="overview-card bg--glass2 shadow px-3 py-3 rounded">
            <div className="flex justify-between text-[12px] w-full">
              <div className="post-info w-10/12 md:w-11/12">
                <div className="mb-2">
                  <div className="post-title font-bold montserrat mb-1">
                    How I built my blog-folio web-app in only 12 days
                  </div>
                  <div className="post-author post-id text-[10px] hidden">
                    Post Id: <span>1223jdjdsjdjsd8343dmmdsdsMQ</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="post-author text--colors_primary">Andrew Okpainmo</div>
                  <div className="post-admin text-[10px]">
                    Created by: <span>Admin Sarah</span>
                  </div>
                </div>
                <section className="most-loved-posts-buttons-wrapper flex gap-x-3">
                  <button type="button" className="btn--outline px-4 py-2 mt-4 rounded">
                    edit
                  </button>
                  <button type="button" className="btn--regular px-4 py-2 mt-4 rounded">
                    delete
                  </button>
                </section>
              </div>
              <div className="reaction-count w-1/12 flex justify-center items-center">20</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeneralOverview;
